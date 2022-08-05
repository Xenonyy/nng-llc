import create from 'zustand';

import type { Seat } from '../components/global/seatConstructor';

interface StoreTypes {
  seatInput: number;
  occupiedSeats: number;
  recommendedSeats: Seat[];
  bestSeats: Seat[];
}

export const useZustandStore = create<StoreTypes>(() => ({
  seatInput: 0,
  occupiedSeats: 0,
  recommendedSeats: [],
  bestSeats: [],
}));
