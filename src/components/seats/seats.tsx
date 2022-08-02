import clsx from 'clsx';
import type { FC } from 'react';
import { memo } from 'react';

import type { SeatTypes } from '../../types/seatTypes';

const SeatsComponent: FC<SeatTypes> = ({
  color,
  occupied,
  number,
  recommended,
}) => {
  return (
    <div className={'flex justify-center items-center flex-row'}>
      <button
        className={clsx(
          'h-14 w-14 flex justify-center items-center flex-col m-2 text-white',
          {
            ['bg-red-300']: color === 'red',
            ['bg-amber-300']: color === 'yellow',
            ['bg-blue-300']: color === 'blue',
            ['bg-green-300']: color === 'green',
            ['bg-gray-300 ']: occupied,
            ['bg-gray-800 ']: recommended,
          },
        )}
        disabled={occupied}
        type={'button'}
      >
        <span className="drop-shadow-sm">{number}</span>
      </button>
    </div>
  );
};

export const Seats = memo(SeatsComponent);
