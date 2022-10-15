import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { StarService } from 'src/app/services/star.service';

@Component({
  selector: 'arrivals-products',
  templateUrl: './arrivals-products.component.html',
  styleUrls: ['./arrivals-products.component.scss']
})
export class ArrivalsProductsComponent implements OnInit {

  product:Product[]=[]
  userActive:boolean=false;
  constructor(private productService:ProductsService,private authService:AuthService, private starService:StarService) { }
  currentRate = 5;
  // ctrl = new FormControl<number | null>(null, Validators.required);
  
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
    return this.productService.getArrivalProducts().subscribe(res=>{
      this.product= res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data()
        }

      })
    });
  }
}
