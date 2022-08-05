import type { FC } from 'react';
import { useEffect, useRef, useCallback, memo } from 'react';

import { useZustandStore } from '../../store/store';
import { generateSeats } from '../../utils/generateSeats';
import { getSeatRecommendations } from '../../utils/seatRecommendations';

const SeatInputComponent: FC = () => {
  const occupiedInputRef = useRef<HTMLInputElement>(null);
  const seatInputRef = useRef<HTMLInputElement>(null);

  const handleOccupiedInputClick = useCallback(() => {
    // Don't let less occupied seats than specified in the specification
    if (Number(occupiedInputRef.current?.value) < 43) {
      alert('The minimum number of occupied seats has to be at least 43.');
    } else {
      generateSeats('auditorium', 8, 14);
      generateSeats('balconyMid', 2, 18);
      generateSeats('balconyLeft', 2, 4);
      generateSeats('balconyRight', 2, 4);
      generateSeats('boxLeft1', 2, 3);
      generateSeats('boxLeft2', 2, 3);
      generateSeats('boxRight1', 2, 3);
      generateSeats('boxRight2', 2, 3);

      useZustandStore.setState({
        occupiedSeats: Number(occupiedInputRef.current?.value),
      });
    }
  }, []);
  const handleSeatInputClick = useCallback(() => {
    // Don't let lower than 2 or higher than 8 seats pass to the state
    if (Number(seatInputRef.current?.value) > 8) {
      alert('The maximum number of seats that you can buy is 8.');
    } else if (Number(seatInputRef.current?.value) < 2) {
      alert('The minimum number of seats that you can buy is 2.');
    } else {
      getSeatRecommendations(Number(seatInputRef.current?.value));
      useZustandStore.setState({
        seatInput: Number(seatInputRef.current?.value),
        recommendedSeats: getSeatRecommendations(
          Number(seatInputRef.current?.value),
        ),
      });
    }
  }, []);

  return (
    <>
      <p className="mt-5 mb-2">{'How many seats should be occupied?'}</p>
      <div className="flex justify-center items-center flex-row">
        <input
          ref={occupiedInputRef}
          className="border-2 border-black border-solid mx-2"
          max={217}
          min={43}
          type={'number'}
        />
        <button
          className="bg-black text-white py-1 px-5 rounded-lg "
          type="button"
          onClick={handleOccupiedInputClick}
        >
          {'Go'}
        </button>
      </div>
      <p className="my-2">{'How many seats would you like to buy?'}</p>
      <div className="flex justify-center items-center flex-row">
        <input
          ref={seatInputRef}
          className="border-2 border-black border-solid mx-2"
          max={8}
          min={2}
          type={'number'}
        />
        <button
          className="bg-black text-white py-1 px-5 rounded-lg "
          type="button"
          onClick={handleSeatInputClick}
        >
          {'Go'}
        </button>
      </div>
    </>
  );
};

export const SeatInput = memo(SeatInputComponent);
