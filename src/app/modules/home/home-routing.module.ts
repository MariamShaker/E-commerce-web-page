import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'slider',component:SliderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
