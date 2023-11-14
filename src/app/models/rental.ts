export interface Rental{
  carId:number;
  rentalId:number;
  customerId:number;
  modelFullName:string;
  customerFullName:string;
  rentDate:Date;
  returnDate?:Date;
  dailyPrice:number;
}
