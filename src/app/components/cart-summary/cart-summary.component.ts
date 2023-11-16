import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/car-detail';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  itemLoaded :boolean;
  currentCart:CartItem;


  constructor(private cartService:CartService, private toastrService:ToastrService){}

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(cardetail:CarDetail){
    this.cartService.removeFromCart(cardetail);
    this.toastrService.error(cardetail.brandName+" "+cardetail.carName +" "+"Sepetten Silindi","",{
      progressBar:true
    })
  }

  setCurrentCart(cartItems:CartItem){
    this.currentCart = cartItems;
    this.toastrService.info("Sepetinize yönlendirildiniz","",{
      progressBar:true
    })
  }





}
