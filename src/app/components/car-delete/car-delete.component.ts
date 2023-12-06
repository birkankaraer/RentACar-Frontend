import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css'],
})
export class CarDeleteComponent implements OnInit {
  carDeleteForm: FormGroup;
  car:Car[]=[];
  carDetails: CarDetail[] = [];
  baseUrl="https://localhost:44329/uploads/images/";

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarsDetailsId(params['carId']);
      this.createCarDeleteForm();
      this.carDeleteForm.patchValue({ carId: params['carId'] });
      this.getCarsDetailsId(params['carId']);
    });
  }

  createCarDeleteForm() {
    this.carDeleteForm = this.formBuilder.group({
      carId: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      carName: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      minFindeksScore:["",Validators.required]
    });
  }

  delete() {
    if (this.carDeleteForm.valid) {
      let carModel = Object.assign({}, this.carDeleteForm.value);
      this.carService.delete(carModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı', {
          progressBar: true,
        });
      });
    } else {
      this.toastrService.error('Formunuz eksik', 'Hata', {
        progressBar: true,
      });
    }
  }

  backToCarList() {
    this.router.navigate(['car']);
  }

  getCarsDetailsId(carId: number) {
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
}
