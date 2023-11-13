import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';
import { CarDetail } from '../models/car-detail';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private toastrService:ToastrService,
    ) { }

  addToCart(cardetail:CarDetail){
    let item = CartItems.find(c=>c.carDetail.carId===cardetail.carId);
    if(item){
      item.quantity+=1;
      item.totalamount=(item.carDetail.dailyPrice)*(item.quantity)
    }else{
      let cartItem = new CartItem();
      cartItem.carDetail = cardetail;
      cartItem.quantity = 1;
      cartItem.totalamount = cartItem.carDetail.dailyPrice;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(cardetail:CarDetail){
    let item = CartItems.find(c=>c.carDetail.carId===cardetail.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }

}
