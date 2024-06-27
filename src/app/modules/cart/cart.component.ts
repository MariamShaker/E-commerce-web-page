import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { elementAt } from 'rxjs';
import { ShoppingCart } from 'src/app/model/shopping-cart.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  shooping: ShoppingCart[] = [];
  productImage: ShoppingCart[] = [];
  uid: string='';
  constructor(private cartService: CartService,private authservice:AuthService,private fireStore:AngularFirestore) {}

  ngOnInit(): void {
    this.authservice.user.subscribe(user => {
      if (user) {
        this.uid = user.uid;
        this.getProduct();
      }
    });


    // this.cartService.getProduct().subscribe((cart) => {
    //   this.shooping = cart.map((element) => {
    //     return {
    //       id: element.payload.doc.id,
    //       ...(element.payload.doc.data() as object),
    //     };
    //   });
    //   // console.log(this.shooping)
    // });
    // this.cartService.getImage().subscribe(res=>{
    //   this.productImage = res.map(element=>{
    //     return{

    //       ...element.payload.doc.data() as object
    //     }
    //   })
    // })
  }
  getProduct() {
    if (!this.uid) {
      console.error('User ID is not set.');
      return;
    }
    return this.fireStore.collection(`users/${this.uid}/cart`).snapshotChanges().subscribe(data => {
      this.shooping = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as any
        };
      });
    });
  }
  deleteProduct(index: any) {
    this.cartService.deleteProduct(this.shooping[index].id);
  }
  updateProduct(index: any) {
    this.cartService.updateAmountOfProduct(
      this.shooping[index].id,
      this.shooping[index].amount
    );
  }
}
