import create from 'zustand';

import type { Seat } from '../utils/seatConstructor';

interface StoreTypes {
  seatInput: number;
  recommendedSeats: Seat[];
}

export const useZustandStore = create<StoreTypes>(() => ({
  seatInput: 0,
  recommendedSeats: [],
}));
