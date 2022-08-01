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
  vacant: boolean;
  section: SectionTypes;
  constructor(
    number: number,
    row: number,
    price: number,
    vacant: boolean,
    section: SectionTypes,
  ) {
    this.number = number;
    this.row = row;
    this.price = price;
    this.vacant = vacant;
    this.section = section;
  }
}
