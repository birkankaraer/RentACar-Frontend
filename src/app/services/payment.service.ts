import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/url';
import { Payment } from '../models/payment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  url = ApiUrl + 'payments/';
  constructor(private httpClient: HttpClient) {}

  pay(payment: Payment): Observable<ResponseModel> {
    let newPath = this.url + 'pay';
    return this.httpClient.post<ResponseModel>(newPath, payment);
  }

  delete(payment: Payment): Observable<ResponseModel> {
    let newPath = this.url + 'delete';
    return this.httpClient.post<ResponseModel>(newPath, payment);
  }

  getAllByCustomerId(customerId: number) {
    let newPath = this.url + 'getAllByCustomerId?customerId=' + customerId;
    return this.httpClient.get<ListResponseModel<Payment>>(newPath);
  }

  checkIfThisCardIsAlreadySavedForThisCustomer(payment: Payment) {
    let newPath = this.url + 'checkIfThisCardIsAlreadySavedForThisCustomer';
    return this.httpClient.post<ResponseModel>(newPath, payment);
  }

  add(payment: Payment) {
    let newPath = this.url + 'add';
    this.httpClient.post<ResponseModel>(newPath, payment);
  }
}
