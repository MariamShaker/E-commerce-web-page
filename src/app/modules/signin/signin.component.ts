import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
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
  userActive: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((result) => {
      if (result) this.router.navigate(['/']);
      else this.router.navigate(['signin']);
    });
  }
  // signInForm = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, noSpace, Validators.minLength(6)]],
  // });
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      noSpace,
      Validators.minLength(6),
    ]),
  });

  get email() {
    return this.signInForm.get('email');
  }
  get password() {
    return this.signInForm.get('password');
  }

  errorMassage = '';
  // signIn() {
  //   if (!this.signInForm.valid) {
  //     return;
  //   }
  //   const { email, password } = this.signInForm.value;
  //   this.authService.signIn(email, password).subscribe(() => {
  //     this.router.navigate(['/home']);
  //   });
  // }
  signIn(form: any) {
    let data: User = form.value;
    this.authService
      .signIn(data.email, data.password)
      .then((res) => console.log(res))
      .catch((err) => {
        this.errorMassage = err;
      });
  }
}
