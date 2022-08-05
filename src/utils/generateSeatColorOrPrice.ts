import type { SectionTypes } from '../components/global/seatConstructor';

export const generateSeatColorOrPrice = (
  row: number,
  number: number,
  type: 'color' | 'price',
  section: SectionTypes,
) => {
  switch (section) {
    case 'auditorium':
      if (
        row === 1 ||
        (row === 2 && number > 1 && number < 15) ||
        (row === 3 && number > 2 && number < 15) ||
        (row === 3 && number > 3 && number < 15)
      ) {
        return type === 'color' ? 'red' : 5000;
      } else if (
        (row === 2 && number === 1) ||
        (row === 2 && number === 15) ||
        (row === 3 && number < 3) ||
        (row === 3 && number > 14) ||
        (row === 4 && number > 1 && number < 17) ||
        (row === 5 && number > 3 && number < 16) ||
        (row === 6 && number > 5 && number < 15)
      ) {
        return type === 'color' ? 'yellow' : 4000;
      } else if (
        (row === 4 && number === 1) ||
        (row === 4 && number === 17) ||
        (row === 5 && number < 4) ||
        (row === 5 && number > 15) ||
        (row === 6 && number < 6) ||
        (row === 6 && number > 14) ||
        row === 7 ||
        row === 8
      ) {
        return type === 'color' ? 'blue' : 3000;
      }
      break;

    case 'balconyMid':
      if (row === 1 && number > 2 && number < 17) {
        return type === 'color' ? 'red' : 5000;
      } else if (
        (row === 1 && number < 3) ||
        (row === 1 && number > 16) ||
        (row === 2 && number > 5 && number < 15)
      ) {
        return type === 'color' ? 'yellow' : 4000;
      } else if (
        (row === 2 && number > 2 && number < 6) ||
        (row === 2 && number > 14 && number < 18)
      ) {
        return type === 'color' ? 'blue' : 3000;
      } else if ((row === 2 && number < 3) || (row === 2 && number > 17)) {
        return type === 'color' ? 'green' : 2000;
      }
      break;

    case 'balconyLeft':
    case 'balconyRight':
      if (row === 1 && number < 4) {
        return type === 'color' ? 'yellow' : 4000;
      } else if ((row === 1 && number === 4) || (row === 2 && number < 4)) {
        return type === 'color' ? 'blue' : 3000;
      } else if (row === 2 && number === 4) {
        return type === 'color' ? 'green' : 2000;
      }
      break;

    case 'boxLeft1':
    case 'boxLeft2':
    case 'boxRight1':
    case 'boxRight2':
      if (row === 2) {
        return type === 'color' ? 'blue' : 3000;
      } else if (row === 1) {
        return type === 'color' ? 'green' : 2000;
      }
      break;

    default:
      break;
  }
};
