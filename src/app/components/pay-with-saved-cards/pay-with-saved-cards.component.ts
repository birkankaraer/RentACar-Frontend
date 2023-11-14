import { Component, OnInit } from '@angular/core';
import { RentKey } from 'src/app/models/constants/local-storage-key';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-pay-with-saved-cards',
  templateUrl: './pay-with-saved-cards.component.html',
  styleUrls: ['./pay-with-saved-cards.component.css']
})
export class PayWithSavedCardsComponent implements OnInit{

  payments:Payment[];
  currentRent:Rental
  constructor(
    private paymentService:PaymentService,
    private rentalService:RentalService,
    private localStorageService:LocalStorageService
  ){}

  ngOnInit(): void {
    this.getCurrentRent()
    this.getAllByCustomerId()
  }

  payWithSavedCard(payment:Payment){
   this.rentalService.payAndRent(payment,this.currentRent)
  }

  getAllByCustomerId(){
    this.paymentService.getAllByCustomerId(this.currentRent.customerId).subscribe(response=>{
      this.payments = response.data
    })
  }

  getCurrentRent(){
    let currentRent = this.localStorageService.getWithType<Rental>(RentKey)
    if (currentRent  !== null){
      this.currentRent = currentRent
    }
  }
}
