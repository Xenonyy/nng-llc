import { recommendedSeats } from '../components/global/recomendedSeats';
import type { Seat, SectionTypes } from '../components/global/seatConstructor';
import { theater } from '../components/global/theatreObject';
import { useZustandStore } from '../store/store';

export const getSeatRecommendations = (seatInput: number): Seat[] => {
  const unoccupiedSeats: Seat[] = [];
  const matchedSeats: Seat[] = [];
  const adjacentSeats: Seat[] = [];

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
    // If there are less than desired adjacent seats, search for only one adjacent seat
    if (matchedSeats.length < seatInput) {
      for (
        let i = 0;
        i <= recommendedSeats[section as SectionTypes].length;
        i++
      ) {
        if (
          i + 1 < recommendedSeats[section as SectionTypes].length &&
          recommendedSeats[section as SectionTypes][i].row ===
            recommendedSeats[section as SectionTypes][i + 1].row &&
          recommendedSeats[section as SectionTypes][i].number ===
            recommendedSeats[section as SectionTypes][i + 1].number - 1
        ) {
          adjacentSeats.push(recommendedSeats[section as SectionTypes][i]);
          adjacentSeats.push(recommendedSeats[section as SectionTypes][i + 1]);
        }
      }
    }
  }
  const sortedAdjacent = adjacentSeats
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
      return b.price - a.price;
    })
    .sort((a: Seat, b: Seat) => {
      return a.section_value - b.section_value;
    });

  useZustandStore.setState({
    bestSeats:
      matchedSeats.length < seatInput
        ? sortedAdjacent.slice(0, seatInput)
        : matchedSeats.slice(0, seatInput),
  });

  return matchedSeats;
};
