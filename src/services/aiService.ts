import { GoogleGenAI } from "@google/genai";
import { Respondent, PHOTO_NAMES, GROUND_TRUTH } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export async function askAboutGraph(
  query: string, 
  data: Respondent[], 
  threshold: number,
  history: ChatMessage[] = []
) {
  // Prepare context
  const stats = {
    total: data.length,
    avgAccuracy: (data.reduce((acc, r) => acc + (r.accuracy || 0), 0) / (data.length || 1)).toFixed(1),
    avgAiKnowledge: (data.reduce((acc, r) => acc + r.aiKnowledge, 0) / (data.length || 1)).toFixed(1),
  };

  const systemInstruction = `
    You are an expert data analyst specialized in cognitive perception and network analysis.
    The user is looking at a "Similarity Network" of 173 respondents who judged 11 famous photographs (Real vs AI-generated).
    
    Context:
    - Total respondents currently in view: ${stats.total}
    - Similarity threshold: ${threshold}/11 (Respondents are connected if they have at least ${threshold} identical answers).
    - Average accuracy in identifying AI images: ${stats.avgAccuracy}%
    - Average self-reported AI knowledge: ${stats.avgAiKnowledge}/5
    
    Photographs judged: ${PHOTO_NAMES.join(", ")}
    Ground Truth (AI-generated photos): ${PHOTO_NAMES.filter((_, i) => GROUND_TRUTH[i] === 'Stvoreno uz pomoć umjetne inteligencije').join(", ")}

    Guidelines:
    - Answer questions concisely and professionally based on the data provided.
    - If asked about connections, explain that links represent shared perception (similar categorization of images).
    - If asked about specific groups (Students vs Employed), refer to the "Homophily" concept (people with similar backgrounds tend to perceive visual reality similarly).
    - Be supportive and insightful. Mention specific photos if relevant.
    - Use the language of the query (Croatian if the user asks in Croatian, English if in English).
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: "user", parts: [{ text: query }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Oprostite, došlo je do greške pri analizi podataka. Molim pokušajte ponovno.";
  }
}
