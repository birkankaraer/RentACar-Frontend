import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDetail } from 'src/app/models/car-detail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carDetails: CarDetail[] = [];
  baseUrl="https://localhost:44329/uploads/images/";


  constructor(private carService: CarService, private router: Router, private carDetailService:CarDetailService) {}

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars(){
    this.carDetailService.getAllCars().subscribe(response=>{
     this.carDetails = response.data
    })
   }

}
