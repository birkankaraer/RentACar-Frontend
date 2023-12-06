import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Contact } from '../models/contact';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = "https://localhost:44329/api/"

  constructor(private httpClient:HttpClient) { }

  getContacts():Observable<ListResponseModel<Contact>>{
    let newPath = this.apiUrl + "contacts/getall"
    return this.httpClient.get<ListResponseModel<Contact>>(newPath);
  }

  add(contact:Contact):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"contacts/add",contact)
  }
}
