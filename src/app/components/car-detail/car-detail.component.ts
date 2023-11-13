import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems } from 'src/app/models/cartItems';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{


 cardetails:CarDetail[]=[];
 cartItems:CartItem[]=[];
 baseUrl="https://localhost:44329/uploads/images/";
 itemLoaded :boolean;
 rentalMessage: string = '';
 rentDate : Date | null = null;
 returnDate : Date | null = null;
 rentalAddForm : FormGroup;


 constructor(
  private cardetailService:CarDetailService,
  private carService:CarService,
  private activatedRoute:ActivatedRoute,
  private toastrService:ToastrService,
  private cartService:CartService,
  private rentalSerivce:RentalService,
  private formBuilder:FormBuilder
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetails(params["carId"])
      }
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.cardetails = response.data
    })
  }

  addToCart(carDetail:CarDetail){

    if(carDetail.carId===15){
      this.toastrService.error("Araç sepete eklenemedi", "Araç başkası tarafından kiralanmış durumda",{
        progressBar:true
      })
    }else{
      console.log(carDetail)
      this.cartService.addToCart(carDetail);
      this.toastrService.success("Araç sepete eklendi",carDetail.brandName+" "+carDetail.carName,{
        progressBar:true
      })
    }
  }





}
