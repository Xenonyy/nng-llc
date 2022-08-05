import type { SectionTypes } from '../components/global/seatConstructor';

export const generateSectionValue = (section: SectionTypes) => {
  switch (section) {
    case 'auditorium':
      return 1;
    case 'balconyMid':
      return 2;
    case 'balconyLeft':
    case 'balconyRight':
      return 3;
    case 'boxLeft1':
    case 'boxLeft2':
    case 'boxRight1':
    case 'boxRight2':
      return 4;
  }
};
