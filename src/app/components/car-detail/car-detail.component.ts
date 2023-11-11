import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems } from 'src/app/models/cartItems';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{


 cardetails:CarDetail[]=[];
 baseUrl="https://localhost:44329/uploads/images/";
 itemLoaded :boolean;


 constructor(
  private cardetailService:CarDetailService,
  private carService:CarService,
  private activatedRoute:ActivatedRoute,
  private toastrService:ToastrService,
  private cartService:CartService
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
    if(carDetail.carId===8){
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
