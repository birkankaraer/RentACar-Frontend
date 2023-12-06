import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { ContactComponent } from './components/contact/contact.component';
import { ProfilComponent } from './components/profil/profil.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: "home", component: HomeComponent},

  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cardetails/car/:carId', component: CarDetailComponent },
  { path: 'cars/brand/:brandId/color/:colorId', component: CarComponent },
  { path: 'carDetail/cartItem/:carId', component: CartDetailComponent },

  { path: "cars/add", component: CarAddComponent},
  { path: "cars/update", component: CarUpdateComponent},
  { path: "cars/delete", component: CarDeleteComponent},

  { path: "brand", component: BrandListComponent,canActivate:[LoginGuard]},
  { path: "brand/add", component: BrandAddComponent},
  { path: "brand/update", component: BrandUpdateComponent},
  { path: 'brand/update/:brandId', component: BrandUpdateComponent },

  { path: "color", component: ColorListComponent,canActivate:[LoginGuard]},
  { path: "color/add", component: ColorAddComponent},
  { path: "color/update", component: ColorUpdateComponent},
  { path: "color/update/:colorId", component: ColorUpdateComponent},

  { path: "car", component: CarListComponent, canActivate:[LoginGuard]},
  { path: 'car/update/:carId', component: CarUpdateComponent },
  { path: 'car/delete/:carId', component: CarDeleteComponent },
  { path: 'car/add', component: CarAddComponent,canActivate:[LoginGuard] },

  { path: 'pay', component: PaymentComponent,canActivate:[LoginGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {path : "cart", component:CartDetailComponent},

  {path: "contact", component:ContactComponent},

  {path: "profil", component:ProfilComponent}















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
