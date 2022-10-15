import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { confirmPassword } from './validations/confirm-password.validation';
import { forbiddenNameValidators } from './validations/forbidden-name.validation';
import { noSpace } from './validations/no-space.validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  
  constructor(private authServices: AuthService, private users: UsersService, private userService:UsersService) {
    
  }

  //show password for  password
  showP: boolean = false;
  showPasswordPassword() {
    this.showP = !this.showP;
  }
  //show password for confirm password
  show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }
  ngOnInit(): void {
    
  }
  form = new FormGroup(
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
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  get userName() {
    return this.form.get('userName');
  }
  errMassage: string = '';
  signUp(form: any) {
    let data:User = form.value;
    
    this.authServices.signUp(data.email,data.password).then(result=>{
      this.errMassage = '';
      console.log(result.user?.uid)
      this.userService.addUser(data,result.user?.uid)
    })
    .catch((err) => {
          this.errMassage = err;
          console.log('a >',err)
        });
    
  }
}
