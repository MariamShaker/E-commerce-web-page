import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Goods } from '../model/goods.model';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  constructor(private fireStore: AngularFirestore, private storage:AngularFireStorage) {}

  
  getAllGoods(){
    return this.fireStore.collection<Goods>(`${environment.goodsApi}`).valueChanges();
  }
  getGoodById(){
    return this.fireStore.collection<Goods>(`${environment.goodsApi}`).snapshotChanges();
  }
  addNewProduct(name:string, price:number,imageUrl:any){
    return new Promise ((resolve,reject)=>{
      // this.storage.ref('goods').child(imageUrl.name).put(imageUrl).then(res=>console.log(res))
    let ref= this.storage.ref(`goods/${imageUrl.name}`) 
    ref.put(imageUrl).then(()=>{
      ref.getDownloadURL().subscribe(imageUrl=>{
        this.fireStore.collection('goods').add({
          name,
          price,
          imageUrl
        }).then(()=> resolve('Done!'))
      }
      )
    })
    })

    
  }
}
