import type { FC } from 'react';
import { memo } from 'react';

const SeatInputComponent: FC = () => {
  return (
    <>
      <p className="mt-10 mb-2">{'How many seats would you like to buy?'}</p>
      <div className="flex justify-center items-center flex-row">
        <input
          className="border-2 border-black border-solid mx-2"
          max={8}
          min={2}
          type={'number'}
        />
        <button
          className="bg-black text-white py-1 px-5 rounded-lg "
          type="button"
        >
          {'Go'}
        </button>
      </div>
    </>
  );
};

export const SeatInput = memo(SeatInputComponent);
