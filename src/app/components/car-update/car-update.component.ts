import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm : FormGroup

  constructor(private formBuilder:FormBuilder, private carService:CarService, private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createCarUpdateFrom();
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



}
