import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Goods } from 'src/app/model/goods.model';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    @ViewChild('image') imageUrl!: ElementRef;
  constructor(private goods:GoodsService) { }

  
  ngOnInit(): void {
  }
  addForm=new FormGroup ({
    name: new FormControl(''),
    price:new FormControl(0),
    image: new FormControl('')
  })
  done:any=''
  addNewProduct(form:any){
    let name = (<Goods> form.value).name as string ,
        price=(<Goods> form.value).price as number,
        image=(this.imageUrl.nativeElement as HTMLInputElement).files 
    this.goods.addNewProduct(name,price,image).then(addedMassage => {
      this.done = addedMassage
    })
  }
}
