import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen:boolean = false;
  userActive:boolean=false;
  constructor(private authService:AuthService, private router:Router) {

  }

  ngOnInit(): void {

    this.authService.user.subscribe((result) =>{
      if (result) {
        this.userActive=true 
        // this.authService.userId =  result.uid 
        // console.log(result.uid)
      }
      else {
          this.userActive= false 
          // this.authService.userId =''
          
        }
    })
  }

  navbarToggle(){
    this.isOpen=!this.isOpen;
  }
  signOut(){
    this.authService.signOut().then(()=> console.log('out'))
  }
}
