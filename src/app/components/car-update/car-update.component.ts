import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm: FormGroup = new FormGroup({});
  brands: Brand[] = [];
  colors: Color[] = [];
  cars: Car[] = [];
  carDetails:CarDetail[]=[];
  baseUrl="https://localhost:44329/uploads/images/";

  constructor(private formBuilder:FormBuilder, private carService:CarService, private toastrService:ToastrService,
    private activatedRoute: ActivatedRoute,private brandService: BrandService,
    private colorService: ColorService,private router: Router,private carDetailService:CarDetailService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
        this.getBrands();
        this.getColors();
        this.createCarUpdateFrom();
        this.carUpdateForm.patchValue({ carId: params['carId'] });
      }
    });
  }

  createCarUpdateFrom(){
    this.carUpdateForm = this.formBuilder.group({
      carId:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      carName:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    })
  }

  update(){
    if(this.carUpdateForm.valid){
      let carModel = Object.assign({}, this.carUpdateForm.value)
      this.carService.update(carModel).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı",{
          progressBar:true
        })
      })
    }else{
      this.toastrService.error("Formunuz eksik","Hata",{
        progressBar:true
      })
    }
  }

  getCarDetails(carId: number) {
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  backToCarList() {
    this.router.navigate(['car']);
  }
}

