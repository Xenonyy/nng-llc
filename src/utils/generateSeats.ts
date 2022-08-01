import { generateSeatColorOrPrice } from './generateSeatColorOrPrice';
import { generateOccupiedSeats } from './occupiedSeats';
import type { SectionTypes } from './seatConstructor';
import { Seat } from './seatConstructor';
import { theater } from './theatreObject';

export const generateSeats = (
  section: SectionTypes,
  col: number,
  rowAmount: number,
) => {
  for (let row = 1; row <= col; row++) {
    theater[section][row] = [];
    if (section === 'auditorium' || section === 'balconyMid') {
      for (let seatNum = 1; seatNum < row + rowAmount; seatNum++) {
        theater[section][row][seatNum] = new Seat(
          seatNum,
          row,
          generateSeatColorOrPrice(row, seatNum, 'price', section) as number,
          generateOccupiedSeats(),
          section,
        );
      }
    } else {
      for (let seatNum = 1; seatNum <= rowAmount; seatNum++) {
        theater[section][row][seatNum] = new Seat(
          seatNum,
          row,
          generateSeatColorOrPrice(row, seatNum, 'price', section) as number,
          generateOccupiedSeats(),
          section,
        );
      }
    }
  }
};
