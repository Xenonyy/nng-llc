import type { Seat } from '../components/global/seatConstructor';

export interface TheaterTypes {
  auditorium: [Seat[]] | [];
  balconyMid: [Seat[]] | [];
  balconyLeft: [Seat[]] | [];
  balconyRight: [Seat[]] | [];
  boxLeft1: [Seat[]] | [];
  boxLeft2: [Seat[]] | [];
  boxRight1: [Seat[]] | [];
  boxRight2: [Seat[]] | [];
}
