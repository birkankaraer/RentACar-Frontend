import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RentKey } from 'src/app/models/constants/local-storage-key';
import { FormIsMissing, SaveYourCreditCard } from 'src/app/models/constants/messages';
import { Customer } from 'src/app/models/customer';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payFormGroup: FormGroup;
  customer:Customer;

  constructor(private paymentService:PaymentService,
    private toastrService:ToastrService,
    private rentService:RentalService,
    private formBuilder:FormBuilder,
    private localStorageService:LocalStorageService
    ){}

  ngOnInit(): void {
    this.createPayFormGroup();
  }

  createPayFormGroup(){
    this.payFormGroup = this.formBuilder.group({
      fullName: ["", Validators.required],
      cardNumber: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvv: ['', Validators.required]
    })
  }

  pay(){
    if (this.payFormGroup.valid) {

      this.toastrService.success("Ödeme başarılı","",{
        progressBar:true
      })
      let rent: Rental = this.localStorageService.get(RentKey)
      let payment: Payment = Object.assign({

        customerId: rent.customerId
      }, this.payFormGroup.value);
      this.askForSave(payment);
      this.rentService.payAndRent(payment, rent)


    }else this.toastrService.error(FormIsMissing)
  }

  askForSave(payment:Payment){
    this.paymentService.checkIfThisCardIsAlreadySavedForThisCustomer(payment).subscribe(response=>{
      if (confirm(SaveYourCreditCard)) this.paymentService.add(payment)
    })
  }

  getAllByCustomerId() {
    if (this && this.customer && this.customer.customerId) {
      // Kodunuz
    } else {
      console.error('Customer or customerId is undefined.');
    }
  }




}
