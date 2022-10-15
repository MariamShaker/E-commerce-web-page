import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArrivalsProductsComponent } from './arrivals-products/arrivals-products.component';

const componentList=[
  HomeComponent,
    SliderComponent,
    FeaturedProductsComponent,
    ArrivalsProductsComponent,
]
@NgModule({
  declarations: [
    ...componentList,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularFirestoreModule,
    SharedModule
  ],
  exports:[
    ...componentList,
    AngularFirestoreModule,
  ]
})
export class HomeModule { }
