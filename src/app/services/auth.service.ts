import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user : Observable<firebase.User |null >
  userId:string = ''

  constructor(private afAuth: AngularFireAuth, private router:Router) {
    this.user = afAuth.user;

  }
  signUp(email: any, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }
  signIn(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(()=>this.router.navigate(['/']))
  }


  signOut() {
    return this.afAuth.signOut();
  }
}
