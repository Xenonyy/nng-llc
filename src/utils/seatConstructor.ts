export type SectionTypes =
  | 'auditorium'
  | 'balconyMid'
  | 'balconyLeft'
  | 'balconyRight'
  | 'boxLeft1'
  | 'boxLeft2'
  | 'boxRight1'
  | 'boxRight2';

export class Seat {
  number: number;
  row: number;
  price: number;
  occupied: boolean;
  section: SectionTypes;
  section_value: number;
  all_seats_in_row: number;
  constructor(
    number: number,
    row: number,
    price: number,
    occupied: boolean,
    section: SectionTypes,
    section_value: number,
    all_seats_in_row: number,
  ) {
    this.number = number;
    this.row = row;
    this.price = price;
    this.occupied = occupied;
    this.section = section;
    this.section_value = section_value;
    this.all_seats_in_row = all_seats_in_row;
  }
}
