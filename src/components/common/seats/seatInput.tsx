import type { FC } from 'react';
import { useCallback, useRef, memo } from 'react';

import { useZustandStore } from '../../../store/store';

interface SeatInputTypes {
  handleInputButtonClick(): void;
  min: number;
  max: number;
  title: string;
  type: 'occupiedSeats' | 'seatInput';
}

const SeatInputComponent: FC<SeatInputTypes> = ({
  max,
  min,
  title,
  handleInputButtonClick,
  type,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    useZustandStore.setState({
      [type]: Number(inputRef.current?.value),
    });
    handleInputButtonClick();
  }, [inputRef.current?.value]);

  return (
    <>
      <p className="mt-5 mb-2">{title}</p>
      <div className="flex justify-center items-center flex-row">
        <input
          ref={inputRef}
          className="border-2 border-black border-solid mx-2"
          max={max}
          min={min}
          type={'number'}
        />
        <button
          className="bg-black text-white py-1 px-5 rounded-lg "
          type="button"
          onClick={handleClick}
        >
          {'Go'}
        </button>
      </div>
    </>
  );
};

export const SeatInput = memo(SeatInputComponent);
