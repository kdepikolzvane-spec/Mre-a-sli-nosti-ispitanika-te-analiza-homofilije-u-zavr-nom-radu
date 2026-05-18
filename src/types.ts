export type DemographicStatus = 'Student' | 'Zaposlena osoba' | 'Učenik srednje škole' | 'Umirovljenik' | 'Nezaposlena osoba' | 'Ostalo';
export type AgeGroup = '15-18' | '19-25' | '26-35' | '36-45' | '46-55' | '56-65' | '66+';
export type Assessment = 'Stvarna fotografija' | 'Stvoreno uz pomoć umjetne inteligencije';

export interface Respondent {
  id: number;
  age: AgeGroup;
  status: DemographicStatus;
  education: string;
  answers: Assessment[];
  aiKnowledge: number;
  accuracy?: number;
}

export interface Node extends d3.SimulationNodeDatum {
  id: number;
  age: AgeGroup;
  status: DemographicStatus;
  group: string;
}

export interface Link extends d3.SimulationLinkDatum<Node> {
  source: number | Node;
  target: number | Node;
  weight: number;
}

export const PHOTO_NAMES = [
  "Migrant Mother",
  "D-Day",
  "Raising A Flag",
  "V-J Day",
  "Burning Monk",
  "Earthrise",
  "Abbey Road",
  "Fire Escape",
  "Afghan Girl",
  "Tank Man",
  "9/11"
];

export const GROUND_TRUTH: Assessment[] = [
  'Stvarna fotografija',                     // 0
  'Stvoreno uz pomoć umjetne inteligencije', // 1 (AI)
  'Stvarna fotografija',                     // 2
  'Stvarna fotografija',                     // 3
  'Stvarna fotografija',                     // 4
  'Stvoreno uz pomoć umjetne inteligencije', // 5 (AI)
  'Stvoreno uz pomoć umjetne inteligencije', // 6 (AI)
  'Stvoreno uz pomoć umjetne inteligencije', // 7 (AI)
  'Stvoreno uz pomoć umjetne inteligencije', // 8 (AI)
  'Stvoreno uz pomoć umjetne inteligencije', // 9 (AI)
  'Stvarna fotografija'                      // 10
];
