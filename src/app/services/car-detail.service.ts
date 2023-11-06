import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetailResponseModel } from '../models/car-detailResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44329/api/Cars/getcardetails"

  constructor(private httpClient:HttpClient) { }

  getAllCars():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl)

  }

}

