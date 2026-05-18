import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Node, Link } from '../types';

interface Props {
  nodes: Node[];
  links: Link[];
  highlightStatus?: string;
  comparisonMode?: boolean;
  onNodeClick?: (node: Node) => void;
}

export default function NetworkGraph({ nodes, links, highlightStatus, comparisonMode, onNodeClick }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);

    svg.selectAll('*').remove();

    const g = svg.append('g');

    // Zoom setup
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 10])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    const simulation = d3.forceSimulation<Node>(nodes)
      .force('link', d3.forceLink<Node, Link>(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(20));

    const link = g.append('g')
      .attr('stroke', '#94a3b8')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', d => Math.sqrt(d.weight - 5) * 1.5 || 1);

    const node = g.append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll<SVGCircleElement, Node>('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 8)
      .attr('fill', d => {
        if (comparisonMode) {
          if (d.age === '19-25') {
            if (d.status === 'Student') return '#6366f1'; // Indigo
            if (d.status === 'Zaposlena osoba') return '#e11d48'; // Rose
          }
          return '#f1f5f9';
        }
        if (d.status === 'Student' && d.age === '19-25') return '#7dd3fc'; // skyblue
        if (d.status === 'Zaposlena osoba' && d.age === '46-55') return '#fb7185'; // salmon/rose
        return '#cbd5e1'; // lightgrey
      })
      .attr('opacity', d => {
        if (comparisonMode) {
          return d.age === '19-25' && (d.status === 'Student' || d.status === 'Zaposlena osoba') ? 1 : 0.1;
        }
        if (!highlightStatus) return 1;
        return d.status === highlightStatus ? 1 : 0.2;
      })
      .style('cursor', 'pointer')
      .on('click', (event, d) => onNodeClick?.(d))
      .call(d3.drag<SVGCircleElement, Node>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended) as any);

    node.append('title')
      .text(d => `${d.status} (${d.age})`);

    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as Node).x!)
        .attr('y1', d => (d.source as Node).y!)
        .attr('x2', d => (d.target as Node).x!)
        .attr('y2', d => (d.target as Node).y!);

      node
        .attr('cx', d => d.x!)
        .attr('cy', d => d.y!);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [nodes, links, highlightStatus]);

  return (
    <div ref={containerRef} className="w-full h-full bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
}
