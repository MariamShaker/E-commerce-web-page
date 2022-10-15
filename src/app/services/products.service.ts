import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { query, orderBy, startAt } from "firebase/firestore";  
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private fireStore: AngularFirestore, private storage:AngularFireStorage) {
   
   }
  /*section feature product at home */
  getFeatureProducts(){
    return this.fireStore.collection<Product>(`${environment.productApi}`, ref=> ref.orderBy('imageUrl','asc').limit(8)).snapshotChanges();
  }
  /*section arrivals product */
  getArrivalProducts(){
    return this.fireStore.collection<Product>(`${environment.productApi}`, ref=> ref.orderBy('imageUrl','desc').limit(8).startAt(['n1'])).snapshotChanges();
  }
  /*shop page */
  getAllProduct(){
    return this.fireStore.collection<Product>(`${environment.productApi}`, ref=> ref.orderBy('imageUrl','asc')).valueChanges();

  }
}
