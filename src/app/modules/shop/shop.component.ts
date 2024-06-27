import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { StarService } from 'src/app/services/star.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  userActive:boolean=false;
  constructor(private productService:ProductsService,private router: Router,
    private authService:AuthService, private starService:StarService,private CartService:CartService) { }
  currentRate = 5;
  product:Product[]=[]
  page:number=1;
  count:number=0;
  tableSize:number=8;
  tableSizes:any=[5,10,15,20]



  ngOnInit(): void {
    this.getData();

    //check if user active
    this.authService.user.subscribe((result) =>{
      if (result) {
        this.userActive=true
      }
      else {
          this.userActive= false

        }
    })
  }


  getData(){
    return this.productService.getAllProduct().subscribe(res=>{
      this.product= res
      // console.log(this.product)
    });
  }

  addItemToCart(item:any) {
    this.CartService.addToCart(item);
     this.router.navigate(['/cart']) // redirect to cart page
  }

  onDataChanged(event:any){
    this.page=event
    this.getData();
  }
  onDataSizeChanged(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
    this.getData()
  }
}
