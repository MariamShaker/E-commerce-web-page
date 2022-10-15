import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Goods } from 'src/app/model/goods.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  goods: Goods[] = [];
  userActive:boolean=false;
  constructor(private goodService: GoodsService, private cartService:CartService,private authService:AuthService) {}

  // getData() {
  //   return this.goodService.getAllGoods().subscribe((data) => (this.goods = data));
  // }
  getId() {
    return this.goodService.getGoodById().subscribe((data) => {
      this.goods = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
    });
  }
  ngOnInit(): void {
    // this.getData();
    this.getId();
  }
  
  addToCart(amount:any , index:any) {
    
    let selectedGood = this.goods[index]
    let data={
      name:selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }
    this.cartService.addToCart(data).then(()=>console.log('added'))
  }
}
