import { useZustandStore } from '../store/store';

export const generateOccupiedSeats = () => {
  return Math.random() > useZustandStore.getState().occupiedSeats / 217;
};
