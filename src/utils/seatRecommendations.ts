import type { Seat, SectionTypes } from './seatConstructor';
import { theater } from './theatreObject';

export const getSeatRecommendations = (seatsNeeded: number): Seat[] => {
  const matchingSteats: Seat[] = [];

  for (const section in theater) {
    theater[section as SectionTypes].map((seats: Seat[]) => {
      seats.map(seat => {
        return !seat.occupied && matchingSteats.push(seat);
      });
    });
    matchingSteats
      .sort((a: Seat, b: Seat) => {
        return (
          Math.abs(a.number - a.all_seats_in_row / 2) -
          Math.abs(b.number - b.all_seats_in_row / 2)
        );
      })
      .sort((a: Seat, b: Seat) => {
        return a.row - b.row;
      })
      .sort((a: Seat, b: Seat) => {
        return a.section_value - b.section_value;
      })
      .sort((a: Seat, b: Seat) => {
        return b.price - a.price;
      });
  }
  const bestSeatsNeededAmount = matchingSteats.slice(0, seatsNeeded);

  return bestSeatsNeededAmount;
};
