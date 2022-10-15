import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../model/product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StarService {
  uid:any =''
  constructor(private fireStore:AngularFirestore,private authService:AuthService) {
    this.authService.user.subscribe(result=>{
      this.uid= result?.uid;
    })
   }
   userRating(data:any){
    return this.fireStore.collection(`users/${this.uid}/star`).add(data)
  }
}
