import type { FC } from 'react';
import { useRef, useCallback, memo } from 'react';

import { useZustandStore } from '../../store/store';
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
