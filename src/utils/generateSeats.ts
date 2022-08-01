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
    for (
      let seatNum = 1;
      section === 'auditorium' || section === 'balconyMid'
        ? seatNum < row + rowAmount
        : seatNum <= rowAmount;
      seatNum++
    ) {
      theater[section][row][seatNum] = new Seat(
        seatNum,
        row,
        generateSeatColorOrPrice(row, seatNum, 'price', section) as number,
        generateOccupiedSeats(),
        section,
      );
    }
  }
};
