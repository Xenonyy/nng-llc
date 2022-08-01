/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import { useEffect, memo } from 'react';

import type { SeatTypes } from '../../types/seatTypes';
import type { TheaterTypes } from '../../types/theaterTypes';
import { generateSeatColorOrPrice } from '../../utils/generateSeatColorOrPrice';
import { generateOccupiedSeats } from '../../utils/occupiedSeats';
import { Seat } from '../../utils/seatConstructor';
import { Seats } from '../seats/seats';

const AuditoriumComponent: FC = () => {
  const theater: TheaterTypes = {
    auditorium: [],
    balconyMid: [],
    balconyLeft: [],
    balconyRight: [],
    boxLeft1: [],
    boxLeft2: [],
    boxRight1: [],
    boxRight2: [],
  };

  for (let row = 1; row < 9; row++) {
    theater.auditorium[row] = [];
    for (let seatNum = 1; seatNum < row + 14; seatNum++) {
      theater.auditorium[row][seatNum] = new Seat(
        seatNum,
        row,
        generateSeatColorOrPrice(row, seatNum, 'price') as number,
        generateOccupiedSeats(),
      );
    }
  }

  // const fillBalconyOrBox = (columns, rows = 2) => {
  //   const layout = [];

  //   for (let row = 0; row < rows; row++) {
  //     layout[row] = [];
  //     for (let seatNum = 0; seatNum < columns; seatNum++) {
  //       layout[row][seatNum] = new Seat(seatNum + 1, row + 1, 5000, true);
  //     }
  //   }

  //   return layout;
  // }

  return (
    <div className={'flex justify-center items-center flex-col mt-10'}>
      <h2 className="text-2xl">{'Auditorium'}</h2>
      {/* {renderSeats()} */}
      <div className="flex justify-center items-center flex-row flex-wrap">
        {theater.auditorium.map((seats: Seat[], index: number) => {
          return (
            <>
              {seats.map((seat, index: number) => {
                const { row, number, vacant } = seat;

                return (
                  <Seats
                    key={index}
                    color={
                      generateSeatColorOrPrice(
                        row,
                        number,
                        'color',
                      ) as SeatTypes['color']
                    }
                    number={number}
                    occupied={vacant}
                  />
                );
              })}
              <hr key={index} className="h-1 w-full" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export const Auditorium = memo(AuditoriumComponent);
