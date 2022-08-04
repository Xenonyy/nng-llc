import type { FC } from 'react';
import { useState, useEffect, useRef, useCallback, memo } from 'react';

import { useZustandStore } from '../../store/store';
import type { TheaterTypes } from '../../types/theaterTypes';
import type { Seat, SectionTypes } from '../../utils/seatConstructor';
import { getSeatRecommendations } from '../../utils/seatRecommendations';

const SeatInputComponent: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = useCallback(() => {
    // Don't let lower than 2 and higher than 8 values pass to the state and seat recommendation algorithm
    if (Number(inputRef.current?.value) > 8) {
      alert('The maximum number of seats that you can buy is 8.');
    } else if (Number(inputRef.current?.value) < 2) {
      alert('The minimum number of seats that you can buy is 2.');
    } else {
      getSeatRecommendations(Number(inputRef.current?.value));
      useZustandStore.setState({
        seatInput: Number(inputRef.current?.value),
        recommendedSeats: getSeatRecommendations(
          Number(inputRef.current?.value),
        ),
      });
    }
  }, []);

  const store = useZustandStore(state => state);
  const matchedSeats: Seat[] = [];

  useEffect(() => {
    for (const section in store.recommendedSeats) {
      for (
        let i = 0;
        i < store.recommendedSeats[section as SectionTypes].length - 1;
        i++
      ) {
        if (
          i + store.seatInput <
            store.recommendedSeats[section as SectionTypes].length &&
          store.recommendedSeats[section as SectionTypes][i].number ===
            store.recommendedSeats[section as SectionTypes][i + store.seatInput]
              .number -
              store.seatInput
        ) {
          for (let j = 0; j <= store.seatInput; j++) {
            matchedSeats.push(
              store.recommendedSeats[section as SectionTypes][i + j],
            );
          }
        }
      }
    }

    console.log(matchedSeats.slice(0, store.seatInput));
    useZustandStore.setState({
      bestSeats: matchedSeats.slice(0, store.seatInput),
    });
  }, [store.recommendedSeats]);

  return (
    <>
      <p className="mt-10 mb-2">{'How many seats would you like to buy?'}</p>
      <div className="flex justify-center items-center flex-row">
        <input
          ref={inputRef}
          className="border-2 border-black border-solid mx-2"
          max={8}
          min={2}
          type={'number'}
        />
        <button
          className="bg-black text-white py-1 px-5 rounded-lg "
          type="button"
          onClick={onClick}
        >
          {'Go'}
        </button>
      </div>
    </>
  );
};

export const SeatInput = memo(SeatInputComponent);
