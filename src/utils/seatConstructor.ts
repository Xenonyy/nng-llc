export class Seat {
  number: number;
  row: number;
  price: number;
  vacant: boolean;
  constructor(number: number, row: number, price: number, vacant: boolean) {
    this.number = number;
    this.row = row;
    this.price = price;
    this.vacant = vacant;
  }
}
