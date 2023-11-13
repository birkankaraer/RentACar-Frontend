import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { ResolveData } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44329/api/Rentals/"

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"getdetails"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  getCheckRentalCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"checkrentalcarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"checkrental",rental)
  }

}
