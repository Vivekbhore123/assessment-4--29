import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {
  title = 'ProjectA';
  // checkUserLoginStatus:boolean=false;
  checkUserLoginStatus:any={};

  constructor()
  {

  }
  
  temp:any= {
    username: "",
    status: false
  }

  ngOnInit(): void {
    

  } 
 
  checkIfLogin()
  {
   
  
   
  }



 


}
