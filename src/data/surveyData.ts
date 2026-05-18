import { Respondent, GROUND_TRUTH } from '../types';

function calculateAccuracy(answers: string[]): number {
  let correct = 0;
  answers.forEach((ans, i) => {
    if (ans === GROUND_TRUTH[i]) correct++;
  });
  return Math.round((correct / GROUND_TRUTH.length) * 100);
}

const rawData: Omit<Respondent, 'accuracy'>[] = [
  {
    id: 0, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija']
  },
  {
    id: 1, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 2, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 3, age: '46-55', status: 'Zaposlena osoba', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 4, age: '46-55', status: 'Zaposlena osoba', education: 'Završen prijediplomski studij', aiKnowledge: 4,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 5, age: '46-55', status: 'Zaposlena osoba', education: 'Završen prijediplomski studij', aiKnowledge: 2,
    answers: ['Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 6, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 7, age: '26-35', status: 'Zaposlena osoba', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 8, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 9, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 10, age: '46-55', status: 'Zaposlena osoba', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 11, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 12, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 13, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 14, age: '36-45', status: 'Zaposlena osoba', education: 'Završen diplomski studij', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 15, age: '36-45', status: 'Zaposlena osoba', education: 'Završen diplomski studij', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 16, age: '56-65', status: 'Zaposlena osoba', education: 'Završen prijediplomski studij', aiKnowledge: 3,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 17, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 3,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 18, age: '19-25', status: 'Student', education: 'Završen prijediplomski studij', aiKnowledge: 3,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 19, age: '46-55', status: 'Zaposlena osoba', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 20, age: '36-45', status: 'Zaposlena osoba', education: 'Završen prijediplomski studij', aiKnowledge: 2,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 21, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 22, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija']
  },
  {
    id: 23, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 3,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 24, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 5,
    answers: ['Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 25, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 26, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 5,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 27, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 28, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 29, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 30, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 31, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 32, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 33, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 5,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 34, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 35, age: '56-65', status: 'Zaposlena osoba', education: 'Završen prijediplomski studij', aiKnowledge: 3,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 36, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 2,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 37, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 38, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 39, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 40, age: '19-25', status: 'Zaposlena osoba', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 41, age: '19-25', status: 'Zaposlena osoba', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 42, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 43, age: '46-55', status: 'Zaposlena osoba', education: 'Završen diplomski studij', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 44, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 45, age: '15-18', status: 'Učenik srednje škole', education: 'Osnovna škola', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 46, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 5,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 47, age: '36-45', status: 'Zaposlena osoba', education: 'Završen diplomski studij', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  },
  {
    id: 48, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 3,
    answers: ['Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvarna fotografija']
  },
  {
    id: 49, age: '19-25', status: 'Student', education: 'Srednja škola', aiKnowledge: 4,
    answers: ['Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvoreno uz pomoć umjetne inteligencije', 'Stvarna fotografija', 'Stvarna fotografija', 'Stvoreno uz pomoć umjetne inteligencije']
  }
];

export const surveyData: Respondent[] = rawData.map(r => ({
  ...r,
  accuracy: calculateAccuracy(r.answers)
}));
