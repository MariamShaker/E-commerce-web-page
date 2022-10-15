import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private fireStore: AngularFirestore,private fireStorage: AngularFireStorage, private router:Router) {}

addUser(user:User,id:any){
  
  return this.fireStore.collection("users").doc(id).set(user)
  .then(()=>{
    this.router.navigate(['/'])
  })
}


  // addNewUser(id: any, name: any, email: any, address: any) {
    
  //   return this.fireStore.collection(`users/`).doc(id).set({name,email,address});
  // }
  // .then(()=>{
  //   alert('registration success')
  //   this.router.navigate(['/signin'])
  // },
  // err=>{
  //   alert(err.message);
  //   this.router.navigate(['/signup'])
  // }
  // );
}
