import { Respondent, Node, Link } from '../types';

export function calculateSimilarity(r1: Respondent, r2: Respondent): number {
  let matches = 0;
  for (let i = 0; i < r1.answers.length; i++) {
    if (r1.answers[i] === r2.answers[i]) {
      matches++;
    }
  }
  return matches;
}

export function buildGraph(data: Respondent[], threshold: number): { nodes: Node[], links: Link[] } {
  const nodes: Node[] = data.map(r => ({
    id: r.id,
    age: r.age,
    status: r.status,
    group: `${r.status}_${r.age}`,
    x: 0,
    y: 0
  }));

  const links: Link[] = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      const similarity = calculateSimilarity(data[i], data[j]);
      if (similarity >= threshold) {
        links.push({
          source: data[i].id,
          target: data[j].id,
          weight: similarity
        });
      }
    }
  }

  return { nodes, links };
}
