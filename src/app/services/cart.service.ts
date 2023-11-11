import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../models/car';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';
import { CarDetail } from '../models/car-detail';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toastrService:ToastrService) { }

  addToCart(cardetail:CarDetail){
    let item = CartItems.find(c=>c.carDetail.carId===cardetail.carId);
    if(item){
      this.toastrService.error("Sepette zaten mevcut")
    }else{
      let cartItem = new CartItem();
      cartItem.carDetail = cardetail;
      cartItem.quantity = 1
      CartItems.push(cartItem)
    }
  }

  list():CartItem[]{
    return CartItems;
  }



}
