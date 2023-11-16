import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/car-detail';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems } from 'src/app/models/cartItems';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  cartItems:CartItem[]=[];
  carDetail:CarDetail[]=[];
  payamount:CartItem[]=[];
  baseUrl="https://localhost:44329/uploads/images/";

  constructor(private cardetailService:CarDetailService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService,
    private toastrService:ToastrService
    ){}

  ngOnInit(): void {
    this.getCart();
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.carDetail = response.data
    })
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  totalpay(cardetail:CarDetail){
    let item = CartItems.find(c=>c.carDetail.carId===cardetail.carId);
    if(item){
      item.payamount+=item.carDetail.dailyPrice
    }else{
      let cartItem = new CartItem();
      cartItem.payamount= cartItem.totalamount;
    }

  }

  removeFromCart(cardetail:CarDetail){
    this.cartService.removeFromCart(cardetail);
    this.toastrService.error(cardetail.brandName+" "+cardetail.carName +" "+"Sepetten Silindi","",{
      progressBar:true
    })
  }

  gotopay(){
    this.toastrService.info("Ödeme sayfasına yönlendirildiniz","",{
      progressBar:true
    })
  }


}
