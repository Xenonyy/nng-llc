/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import type { FC } from 'react';
import { memo } from 'react';

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
  return (
    <div
      className={clsx('flex justify-center items-center flex-col mt-10', {
        ['-rotate-[75deg] mb-40']:
          section === 'boxLeft1' || section === 'boxLeft2',
        ['rotate-[75deg] mb-40']:
          section === 'boxRight1' || section === 'boxRight2',
        ['rotate-[25deg]']: section === 'balconyLeft',
        ['-rotate-[25deg]']: section === 'balconyRight',
      })}
    >
      <h2 className="text-2xl capitalize">{section}</h2>
      <div className={'flex justify-center items-center flex-wrap'}>
        {data.map((seats: Seat[], index: number) => {
          return (
            <>
              <span>{index}</span>
              {!reversed
                ? seats.map((seat, index: number) => {
                    const { row, number, vacant } = seat;

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
                        occupied={vacant}
                      />
                    );
                  })
                : seats
                    .map((seat, index: number) => {
                      const { row, number, vacant } = seat;

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
                          occupied={vacant}
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
