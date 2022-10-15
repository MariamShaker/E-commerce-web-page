import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from './slider/slider.component';

const componentList=[ShopComponent,CartComponent,SliderComponent]
@NgModule({
  declarations: [
    ...componentList
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
  ],exports:[
    ...componentList,
  ]
})
export class ShopModule { }
