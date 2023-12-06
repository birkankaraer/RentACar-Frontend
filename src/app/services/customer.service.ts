import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { SingleResponseModel } from '../models/singleResonseModel';
import { CustomerReal } from '../models/customer-real';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44329/api"

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl + "/customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }

  getCustomerId(userId:number):Observable<SingleResponseModel<CustomerReal>>{
    let newPath = this.apiUrl + "/Customers/getbyuser?userId=" + userId
    return this.httpClient.get<SingleResponseModel<CustomerReal>>(newPath)
  }
  customerUpdate(customer:Customer):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/customers/update"
    return this.httpClient.post<ResponseModel>(newPath,customer)
  }
}
