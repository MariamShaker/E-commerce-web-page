import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Goods } from '../model/goods.model';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  uid:any =''
  
  constructor(private fireStore:AngularFirestore,  private authService:AuthService ) { 
    this.authService.user.subscribe(result=>{
      this.uid= result?.uid;
    })
  }
  addToCart(data:Goods){
    return this.fireStore.collection(`users/${this.uid}/cart`).add(data)
  }
  getProduct(){
    return this.fireStore.collection(`users/${this.uid}/cart`).snapshotChanges()

  }
  getImage(){
    return this.fireStore.collection(`goods`).snapshotChanges()
  }
  deleteProduct(id:any){
    return this.fireStore.doc(`users/${this.uid}/cart/${id}`).delete()
  }
  updateAmountOfProduct(id:any, amount:any){
    return this.fireStore.doc(`users/${this.uid}/cart/${id}`).update({amount})

  }
}
