import type { FC } from 'react';
import { memo } from 'react';

import { generateSeats } from '../utils/generateSeats';

import { TheaterSection } from './common/sections/section';
import { theater } from './global/theatreObject';

const AllSectionsComponent: FC = () => {
  // Generate the seats for each section, define the amounf of rows and the amount of seats in one row
  generateSeats('auditorium', 8, 14);
  generateSeats('balconyMid', 2, 18);
  generateSeats('balconyLeft', 2, 4);
  generateSeats('balconyRight', 2, 4);
  generateSeats('boxLeft1', 2, 3);
  generateSeats('boxLeft2', 2, 3);
  generateSeats('boxRight1', 2, 3);
  generateSeats('boxRight2', 2, 3);

  const {
    auditorium,
    balconyLeft,
    balconyMid,
    balconyRight,
    boxLeft1,
    boxLeft2,
    boxRight1,
    boxRight2,
  } = theater;

  return (
    <div className="flex justify-center items-center flex-row">
      <div className="flex-row">
        <div className="flex-col w-80">
          <TheaterSection reversed data={boxLeft1} section={'boxLeft1'} />
          <TheaterSection reversed data={boxLeft2} section={'boxLeft2'} />
          <TheaterSection reversed data={balconyLeft} section={'balconyLeft'} />
        </div>
      </div>
      <div>
        <TheaterSection data={auditorium} section={'auditorium'} />
        <TheaterSection data={balconyMid} section={'balconyMid'} />
      </div>
      <div>
        <div className="flex-col w-80">
          <TheaterSection data={boxRight1} section={'boxRight1'} />
          <TheaterSection data={boxRight2} section={'boxRight2'} />
          <TheaterSection data={balconyRight} section={'balconyRight'} />
        </div>
      </div>
    </div>
  );
};

export const AllSections = memo(AllSectionsComponent);
