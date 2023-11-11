import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit{

  brands: Brand[] = []
  colors: Color[] = []
  cars: Car[] = [];
  isDataLoaded = false
  selectedBrandId: number | null = null
  selectedColorId: number | null = null
  routeLink = ""
  brandFilter:number;
  colorFilter:number;


  constructor(private brandService: BrandService, private colorService: ColorService, private carService:CarService) { }

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data
      this.isDataLoaded = true
    })
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data
      this.isDataLoaded = true
    })
  }

  changeButtonClass() {
    if (this.selectedBrandId || this.selectedColorId) {
      return "btn btn-success"
    } else {
      return "btn btn-success disabled"
    }
  }

  changeRouteLink() {
    if (this.selectedBrandId !== undefined && this.selectedColorId !== undefined) {
      this.routeLink = "/cars/brand/" + this.selectedBrandId + "/color/" + this.selectedColorId
      return this.routeLink
    } else if (this.selectedBrandId == undefined && this.selectedColorId !== undefined) {
      this.routeLink = "/cars/color/" + this.selectedColorId
      return this.routeLink
    } else if (this.selectedBrandId !== undefined && this.selectedColorId == undefined) {
      this.routeLink = "/cars/brand/" + this.selectedBrandId
      return this.routeLink
    } else {
      this.routeLink = ""
      return this.routeLink
    }
  }

  getCarByBrandAndColor(brandId:number, colorId:number){
    this.carService.getCarByBrandAndColor(brandId, colorId).subscribe((response) =>{
      this.cars = response.data;
    })
  }

}
