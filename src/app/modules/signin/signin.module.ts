import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    SharedModule,
    AngularFireAuthModule,
  ],exports:[
    SigninComponent
  ]
})
export class SigninModule {}
