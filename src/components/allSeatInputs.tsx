import type { FC } from 'react';
import { useCallback, memo } from 'react';

import { useZustandStore } from '../store/store';
import { generateSeats } from '../utils/generateSeats';
import { getSeatRecommendations } from '../utils/seatRecommendations';

import { SeatInput } from './common/seats/seatInput';

const AllSeatInputComponent: FC = () => {
  const store = useZustandStore(state => state);

  const handleOccupiedInputClick = useCallback(() => {
    // Don't let less occupied seats than specified in the specification
    if (useZustandStore.getState().occupiedSeats < 43) {
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
    }
  }, [store.occupiedSeats]);

  const handleSeatInputClick = useCallback(() => {
    // Don't let lower than 2 or higher than 8 seats pass to the state
    if (useZustandStore.getState().seatInput > 8) {
      alert('The maximum number of seats that you can buy is 8.');
    } else if (useZustandStore.getState().seatInput < 2) {
      alert('The minimum number of seats that you can buy is 2.');
    } else {
      getSeatRecommendations(useZustandStore.getState().seatInput);
    }
  }, [store.seatInput]);

  return (
    <>
      <SeatInput
        handleInputButtonClick={handleOccupiedInputClick}
        max={217}
        min={43}
        title={'How many seats should be occupied?'}
        type="occupiedSeats"
      />
      <SeatInput
        handleInputButtonClick={handleSeatInputClick}
        max={8}
        min={2}
        title={'How many seats would you like to buy?'}
        type="seatInput"
      />
    </>
  );
};

export const AllSeatInputs = memo(AllSeatInputComponent);
