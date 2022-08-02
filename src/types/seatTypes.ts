export interface SeatTypes {
  color: 'red' | 'yellow' | 'blue' | 'green';
  occupied: boolean;
  recommended: boolean;
  number?: number;
}
