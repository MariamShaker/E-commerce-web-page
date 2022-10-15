import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
