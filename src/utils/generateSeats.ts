import type { SectionTypes } from '../components/global/seatConstructor';
import { Seat } from '../components/global/seatConstructor';
import { theater } from '../components/global/theatreObject';

import { generateSeatColorOrPrice } from './generateSeatColorOrPrice';
import { generateSectionValue } from './generateSectionValue';
import { generateOccupiedSeats } from './occupiedSeats';

export const generateSeats = (
  section: SectionTypes,
  row: number,
  seatAmount: number,
) => {
  for (let col = 1; col <= row; col++) {
    theater[section][col] = [];
    for (
      let seatNum = 1;
      // Only increase the amount of seats per row for specific theater sections
      section === 'auditorium' || section === 'balconyMid'
        ? seatNum < col + seatAmount
        : seatNum <= seatAmount;
      seatNum++
    ) {
      theater[section][col][seatNum] = new Seat(
        seatNum,
        col,
        generateSeatColorOrPrice(col, seatNum, 'price', section) as number,
        generateOccupiedSeats(),
        section,
        generateSectionValue(section),
        Math.round(seatAmount + (col - 1)),
      );
    }
  }
};
