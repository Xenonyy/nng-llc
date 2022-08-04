import { recommendedSeats } from '../components/global/recomendedSeats';
import type { RecommendedSeatsTypes } from '../types/recomendedSeats';

import type { Seat, SectionTypes } from './seatConstructor';
import { theater } from './theatreObject';

export const getSeatRecommendations = (
  seatsNeeded: number,
): RecommendedSeatsTypes => {
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
        return a.number - b.number;
      })
      .sort((a: Seat, b: Seat) => {
        return a.row - b.row;
      });

    // const bestSeatsNeededAmount = matchingSteats.slice(0, seatsNeeded);

    recommendedSeats[section as SectionTypes] = matchingSteats.filter(
      seat => seat.section === section,
    );
  }

  console.log(recommendedSeats);

  return recommendedSeats;
};
