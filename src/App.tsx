/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Users, Info, Settings2, Sliders, ChevronRight, X, BarChart3, Database } from 'lucide-react';
import { surveyData } from './data/surveyData';
import { buildGraph } from './utils/graph';
import NetworkGraph from './components/NetworkGraph';
import { Node, PHOTO_NAMES, GROUND_TRUTH } from './types';

import ChatBox from './components/ChatBox';

export default function App() {
  const [threshold, setThreshold] = useState(8);
  const [minAccuracy, setMinAccuracy] = useState(0);
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
  const [highlightStatus, setHighlightStatus] = useState<string | undefined>(undefined);
  const [comparisonMode, setComparisonMode] = useState(false);

  const filteredData = useMemo(() => 
    surveyData.filter(r => (r.accuracy || 0) >= minAccuracy)
  , [minAccuracy]);

  const graph = useMemo(() => buildGraph(filteredData, threshold), [filteredData, threshold]);
  
  const selectedRespondent = useMemo(() => 
    selectedNodeId !== null ? surveyData.find(r => r.id === selectedNodeId) : null
  , [selectedNodeId]);

  const stats = useMemo(() => {
    const total = filteredData.length;
    const accuracies = filteredData.map(r => r.accuracy || 0);
    const maxAccuracy = accuracies.length > 0 ? Math.max(...accuracies) : 0;
    const minAccuracyVal = accuracies.length > 0 ? Math.min(...accuracies) : 0;
    const avgAiKnowledge = filteredData.reduce((acc, r) => acc + r.aiKnowledge, 0) / (total || 1);
    const avgAccuracy = filteredData.reduce((acc, r) => acc + (r.accuracy || 0), 0) / (total || 1);

    // Comparison data: Students vs Employed (19-25)
    const students1925 = filteredData.filter(r => r.status === 'Student' && r.age === '19-25');
    const employed1925 = filteredData.filter(r => r.status === 'Zaposlena osoba' && r.age === '19-25');
    
    const avgAccStudent = students1925.reduce((acc, r) => acc + (r.accuracy || 0), 0) / (students1925.length || 1);
    const avgAccEmployed = employed1925.reduce((acc, r) => acc + (r.accuracy || 0), 0) / (employed1925.length || 1);

    return { 
      total, 
      maxAccuracy,
      minAccuracy: minAccuracyVal,
      avgAiKnowledge: avgAiKnowledge.toFixed(1),
      avgAccuracy: avgAccuracy.toFixed(1),
      comp: {
        studentCount: students1925.length,
        employedCount: employed1925.length,
        avgAccStudent: avgAccStudent.toFixed(1),
        avgAccEmployed: avgAccEmployed.toFixed(1)
      }
    };
  }, [filteredData]);

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800 overflow-hidden">
      {/* ChatBox Component */}
      <ChatBox data={filteredData} threshold={threshold} />
      {/* Sidebar Controls */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-xl z-10 transition-all">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-slate-900 p-2 rounded-lg text-white">
              <Network size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">AI Perception</h1>
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Analiza vizualne procjene (n=173) • Model: Network Similarity
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Controls */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-slate-900 font-semibold text-sm">
              <Sliders size={16} />
              <span>Postavke mreže</span>
            </div>
            <div className="space-y-6">
              {/* Similarity Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-slate-500 uppercase tracking-wider font-bold">Prag sličnosti</label>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-mono font-bold">{threshold}/11</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="11" 
                  value={threshold} 
                  onChange={(e) => setThreshold(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
              </div>

              {/* Accuracy Filter Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-slate-500 uppercase tracking-wider font-bold">Filter točnosti (min)</label>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-mono font-bold">{minAccuracy}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="9" 
                  value={minAccuracy} 
                  onChange={(e) => setMinAccuracy(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-[10px] text-slate-400">Preostalo ispitanika:</span>
                  <span className="text-xs font-bold text-slate-900">{stats.total}</span>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider font-bold block mb-2">Vizualni fokus</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => {
                      setHighlightStatus(highlightStatus === 'Student' ? undefined : 'Student');
                      setComparisonMode(false);
                    }}
                    className={`text-[11px] py-2 px-3 rounded-md font-medium border transition-all ${highlightStatus === 'Student' ? 'bg-sky-100 border-sky-300 text-sky-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    Studenti (19-25)
                  </button>
                  <button 
                    onClick={() => {
                      setHighlightStatus(highlightStatus === 'Zaposlena osoba' ? undefined : 'Zaposlena osoba');
                      setComparisonMode(false);
                    }}
                    className={`text-[11px] py-2 px-3 rounded-md font-medium border transition-all ${highlightStatus === 'Zaposlena osoba' ? 'bg-rose-100 border-rose-300 text-rose-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    Zaposleni (46-55)
                  </button>
                </div>
              </div>

              {/* Comparison Mode Toggle */}
              <button 
                onClick={() => {
                  setComparisonMode(!comparisonMode);
                  setHighlightStatus(undefined);
                }}
                className={`w-full text-xs py-3 px-4 rounded-lg font-bold border flex items-center justify-between transition-all ${comparisonMode ? 'bg-indigo-600 border-indigo-700 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'}`}
              >
                <span>Usporedba (19-25 god)</span>
                <ChevronRight size={14} className={`transform transition-transform ${comparisonMode ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </section>

          {/* Stats Summary */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-slate-900 font-semibold text-sm">
              <BarChart3 size={16} />
              <span>Statistika</span>
            </div>
            <div className="space-y-2">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex justify-between items-center">
                <span className="text-xs font-medium text-slate-600">Najbolji rezultat</span>
                <span className="font-mono text-xs font-bold text-emerald-600">{stats.maxAccuracy}%</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex justify-between items-center">
                <span className="text-xs font-medium text-slate-600">Najlošiji rezultat</span>
                <span className="font-mono text-xs font-bold text-rose-600">{stats.minAccuracy}%</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex justify-between items-center">
                <span className="text-xs font-medium text-slate-600">Prosječna točnost</span>
                <span className="font-mono text-xs font-bold text-slate-900">{stats.avgAccuracy}%</span>
              </div>
            </div>
          </section>

          {/* Comparison Stats (Conditional) */}
          <AnimatePresence>
            {comparisonMode && (
              <motion.section
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 space-y-4 shadow-inner">
                  <div className="text-[11px] font-black text-indigo-700 uppercase tracking-widest text-center">Usporedba (19-25 god)</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-[10px] text-indigo-500 font-bold">Studenti ({stats.comp.studentCount})</div>
                      <div className="text-lg font-black text-indigo-900">{stats.comp.avgAccStudent}%</div>
                    </div>
                    <div className="text-center border-l border-indigo-200">
                      <div className="text-[10px] text-indigo-500 font-bold">Zaposleni ({stats.comp.employedCount})</div>
                      <div className="text-lg font-black text-indigo-900">{stats.comp.avgAccEmployed}%</div>
                    </div>
                  </div>
                  <p className="text-[9px] text-indigo-400 italic text-center">
                    Uzorak obuhvaća ispitanike u dobnoj skupini 19-25.
                  </p>
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Legend */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-slate-900 font-semibold text-sm">
              <Info size={16} />
              <span>Legenda</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${comparisonMode ? 'bg-indigo-500' : 'bg-sky-300'}`}></div>
                <span className="text-[11px] text-slate-600">Studenti 19-25</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${comparisonMode ? 'bg-rose-600' : 'bg-rose-400'}`}></div>
                <span className="text-[11px] text-slate-600">Zaposleni {comparisonMode ? '19-25' : '46-55'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <span className="text-[11px] text-slate-600">Ostale skupine</span>
              </div>
            </div>
          </section>
        </div>
        
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
          © 2026 Survey Analysis Tool • networkx.Algorithm.community
        </div>
      </aside>

      {/* Main Viewport */}
      <main className="flex-1 relative p-8 flex flex-col">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Mrežni graf sličnosti</h2>
            <p className="text-sm text-slate-500">Vizualizacija homofilije na temelju kognitivne procjene AI fotografije</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wide shadow-sm">
              Metoda: Spring Layout
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wide shadow-sm">
              D3.js v7
            </span>
          </div>
        </div>

        <div className="flex-1 relative">
           <NetworkGraph 
              nodes={graph.nodes} 
              links={graph.links} 
              highlightStatus={highlightStatus}
              comparisonMode={comparisonMode}
              onNodeClick={(n) => setSelectedNodeId(n.id)}
           />

           {/* Respondent Detail Overlay */}
           <AnimatePresence>
            {selectedRespondent && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl p-6 border-l border-slate-200 z-20 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Detalji ispitanika</h3>
                  <button 
                    onClick={() => setSelectedNodeId(null)}
                    className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl ${
                    selectedRespondent.status === 'Student' ? 'bg-sky-400' : 'bg-slate-400'
                  }`}>
                    {selectedRespondent.id}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-900">{selectedRespondent.status}</div>
                    <div className="text-xs text-slate-500 italic">{selectedRespondent.age} god • {selectedRespondent.education}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-black text-slate-400 uppercase tracking-tighter">Točnost</div>
                    <div className={`text-lg font-black ${
                      (selectedRespondent.accuracy || 0) > 70 ? 'text-emerald-500' : 
                      (selectedRespondent.accuracy || 0) > 40 ? 'text-amber-500' : 'text-rose-500'
                    }`}>
                      {selectedRespondent.accuracy}%
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 space-y-2">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 border-b pb-1 flex justify-between">
                    <span>Procjena fotografija</span>
                    <span>Točno?</span>
                  </div>
                  {selectedRespondent.answers.map((answer, i) => {
                    const isCorrect = answer === GROUND_TRUTH[i];
                    return (
                      <div key={i} className={`flex flex-col gap-1 p-2 bg-slate-50 rounded border transition-all ${
                        isCorrect ? 'border-emerald-100' : 'border-rose-100'
                      }`}>
                        <div className="flex justify-between items-center">
                           <span className="text-[10px] font-medium text-slate-500">{PHOTO_NAMES[i]}</span>
                           <div className={`w-2 h-2 rounded-full ${isCorrect ? 'bg-emerald-400' : 'bg-rose-400'}`}></div>
                        </div>
                        <div className={`text-[11px] font-bold ${answer === 'Stvarna fotografija' ? 'text-slate-700' : 'text-slate-900'}`}>
                          {answer}
                        </div>
                        <div className="text-[9px] text-slate-400 font-medium italic">
                          Točno je: {GROUND_TRUTH[i]}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-medium">Znanje o AI</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                         <div key={star} className={`w-2 h-2 rounded-full ${star <= selectedRespondent.aiKnowledge ? 'bg-slate-900' : 'bg-slate-200'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
           </AnimatePresence>

           {/* Floating Info */}
           <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg text-[11px] text-slate-500 max-w-xs">
              <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold">
                <Settings2 size={14} />
                <span>Upute</span>
              </div>
              Pritisnite na čvor za detalje. Koristite kotačić miša za zoom. Povucite čvorove za reorganizaciju rasporeda.
           </div>
        </div>
      </main>
    </div>
  );
}
