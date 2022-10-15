import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { confirmPassword } from '../signup/validations/confirm-password.validation';
import { forbiddenNameValidators } from '../signup/validations/forbidden-name.validation';
import { noSpace } from '../signup/validations/no-space.validation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  //show password for  password
  show: boolean = false;
  showPasswordPassword() {
    this.show = !this.show;
  }
  userActive:boolean=false;
  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(): void {
    this.authService.user.subscribe(result=>{
      if (result) this.router.navigate(['/'])
      else this.router.navigate(['signin'])
    })
  }
  signInForm = new FormGroup(
    {
      userName: new FormControl('', [
        Validators.required,
        forbiddenNameValidators(/admin/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        noSpace,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
    },
    {
      validators: confirmPassword,
    }
  );

  get email() {
    return this.signInForm.get('email');
  }
  get password() {
    return this.signInForm.get('password');
  }
  get confirmPassword() {
    return this.signInForm.get('confirmPassword');
  }
  get userName() {
    return this.signInForm.get('userName');
  }
   errorMassage='';
  signIn(form: any) {
    let data:User =form.value
    this.authService.signIn(data.email,data.password).then(res=>console.log(res)).catch(err=>{
       
      this.errorMassage = err;
    })
  }
}
