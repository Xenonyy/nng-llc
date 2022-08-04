import create from 'zustand';

import type { RecommendedSeatsTypes } from '../types/recomendedSeats';
import type { Seat } from '../utils/seatConstructor';

interface StoreTypes {
  seatInput: number;
  recommendedSeats: RecommendedSeatsTypes;
  bestSeats: Seat[];
}

export const useZustandStore = create<StoreTypes>(() => ({
  seatInput: 0,
  recommendedSeats: {
    auditorium: [],
    balconyMid: [],
    balconyLeft: [],
    balconyRight: [],
    boxLeft1: [],
    boxLeft2: [],
    boxRight1: [],
    boxRight2: [],
  },
  bestSeats: [],
}));
