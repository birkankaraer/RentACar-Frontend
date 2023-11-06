import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';

import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

 cars:Car[]= [];
 cardetails:CarDetail[]=[];
 dataLoaded = false;


 constructor(
  private carService:CarService,
  private cardetailService:CarDetailService
  ){}

 ngOnInit(): void {
  this.getAllCars();
}

getCars() {
  this.carService.getCars().subscribe(response=>{
    this.cars = response.data
    this.dataLoaded = true;
  })
}

getAllCars(){
 this.cardetailService.getAllCars().subscribe(response=>{
  this.cardetails = response.data
  this.dataLoaded = true;
 })
}

}
