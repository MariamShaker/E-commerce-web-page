import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { StarService } from 'src/app/services/star.service';

@Component({
  selector: 'featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
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
    return this.productService.getFeatureProducts().subscribe(res=>{
      this.product= res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data()
        }

      })
    });
  }



  // productRating(index:any) {
    
  //   let selectedGood = this.product[index]
  //   let data={
  //     name:selectedGood.name,
  //     rating: selectedGood.ratingValue
      
  //   }
  //   this.starService.userRating(data).then(()=>console.log(this.currentRate))
  // }

}
