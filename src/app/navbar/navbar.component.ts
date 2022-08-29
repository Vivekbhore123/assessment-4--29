import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[]
})
export class NavbarComponent implements OnInit {

  

  constructor(private router:Router)
  {
  }
  
  username:string | null = "";

  ngOnInit(): void {

    console.log("kkvknvknvknsknvsknvknkkn")

   
} 

 


}

