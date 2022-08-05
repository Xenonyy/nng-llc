import { recommendedSeats } from '../components/global/recomendedSeats';
import { useZustandStore } from '../store/store';

import type { Seat, SectionTypes } from './seatConstructor';
import { theater } from './theatreObject';

export const getSeatRecommendations = (seatInput: number): Seat[] => {
  const unoccupiedSeats: Seat[] = [];
  const matchedSeats: Seat[] = [];

  // Select the and return the unoccupied seats from the theater and sort it based on number, row and section
  for (const section in theater) {
    theater[section as SectionTypes].map((seats: Seat[]) => {
      seats.map(seat => {
        return !seat.occupied && unoccupiedSeats.push(seat);
      });
    });
    unoccupiedSeats
      .sort((a: Seat, b: Seat) => {
        return a.number - b.number;
      })
      .sort((a: Seat, b: Seat) => {
        return a.row - b.row;
      });

    recommendedSeats[section as SectionTypes] = unoccupiedSeats.filter(
      seat => seat.section === section,
    );

    // Loop over each section in the theater and push the best seats required based on the user input to the global state
    for (
      let i = 0;
      i <= recommendedSeats[section as SectionTypes].length;
      i++
    ) {
      if (
        i + seatInput < recommendedSeats[section as SectionTypes].length &&
        recommendedSeats[section as SectionTypes][i].row ===
          recommendedSeats[section as SectionTypes][i + seatInput - 1].row &&
        recommendedSeats[section as SectionTypes][i].number ===
          recommendedSeats[section as SectionTypes][i + seatInput - 1].number -
            seatInput +
            1
      ) {
        for (let j = 0; j <= seatInput; j++) {
          matchedSeats.push(recommendedSeats[section as SectionTypes][i + j]);
        }
      }
    }
  }
  useZustandStore.setState({
    bestSeats: matchedSeats.slice(0, seatInput),
  });

  return matchedSeats;
};
