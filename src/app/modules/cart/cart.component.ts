import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { ShoppingCart } from 'src/app/model/shopping-cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shooping:ShoppingCart[]=[]
  productImage:ShoppingCart[]=[]
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(cart=>{
      this.shooping = cart.map(element=>{
        return{
          id:element.payload.doc.id,
          ...element.payload.doc.data() as object
        }
      })
      console.log(this.shooping)
    })
    // this.cartService.getImage().subscribe(res=>{
    //   this.productImage = res.map(element=>{
    //     return{
          
    //       ...element.payload.doc.data() as object
    //     }
    //   })
    // })
  }

  deleteProduct(index:any){
    this.cartService.deleteProduct(this.shooping[index].id)
  }
  updateProduct(index:any){
    this.cartService.updateAmountOfProduct(this.shooping[index].id,this.shooping[index].amount)
  }
}
