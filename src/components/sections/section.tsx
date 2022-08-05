/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import type { FC } from 'react';
import { memo } from 'react';

import { useZustandStore } from '../../store/store';
import type { SeatTypes } from '../../types/seatTypes';
import { generateSeatColorOrPrice } from '../../utils/generateSeatColorOrPrice';
import type { Seat, SectionTypes } from '../../utils/seatConstructor';
import { Seats } from '../seats/seats';

interface TheaterSectionTypes {
  data: [Seat[]] | [];
  section: SectionTypes;
  reversed?: boolean;
}

const TheaterSectionComponent: FC<TheaterSectionTypes> = ({
  data,
  section,
  reversed = false,
}) => {
  const store = useZustandStore();

  return (
    <div
      className={clsx('flex justify-center items-center flex-col mt-5 w-fit', {
        ['-rotate-[75deg] mb-40']:
          section === 'boxLeft1' || section === 'boxLeft2',
        ['rotate-[75deg] mb-40']:
          section === 'boxRight1' || section === 'boxRight2',
        ['rotate-[25deg]']: section === 'balconyLeft',
        ['-rotate-[25deg]']: section === 'balconyRight',
      })}
    >
      <h2 className="text-2xl capitalize">{section}</h2>
      <div className={'flex justify-center items-center flex-wrap w-fit'}>
        {data.map((seats: Seat[], index: number) => {
          return (
            <>
              <span>{index}</span>
              {/* Give option to reverse the mapping for some of the theater sections */}
              {!reversed
                ? seats.map((seat, index: number) => {
                    const { row, number, occupied } = seat;

                    return (
                      <Seats
                        key={index}
                        color={
                          generateSeatColorOrPrice(
                            row,
                            number,
                            'color',
                            section,
                          ) as SeatTypes['color']
                        }
                        number={number}
                        occupied={occupied}
                        recommended={store.bestSeats.includes(seat)}
                      />
                    );
                  })
                : seats
                    .map((seat, index: number) => {
                      const { row, number, occupied } = seat;

                      return (
                        <Seats
                          key={index}
                          color={
                            generateSeatColorOrPrice(
                              row,
                              number,
                              'color',
                              section,
                            ) as SeatTypes['color']
                          }
                          number={number}
                          occupied={occupied}
                          recommended={store.bestSeats.includes(seat)}
                        />
                      );
                    })
                    .reverse()}
              <div key={index} className="w-full" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export const TheaterSection = memo(TheaterSectionComponent);
