import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about.model';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  data:About[]=[]
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    return this.aboutService.getAllData().subscribe(result=>{
      this.data=result
    })
  }
}
