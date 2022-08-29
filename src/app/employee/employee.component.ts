import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginService } from '../core/services/login.service';
import {EmployeeService} from "../core/services/empService/emp.service"

import {EmpData} from "../core/models/users.model"

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // providers:[LoginService]
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  employees:EmpData[]= [];

  // constructor(private _service:LoginService,private router:Router) { }
  constructor(private _empService:EmployeeService,private router:Router) { }

  ngOnInit(): void {

    this._empService.getEmployeeByApi().subscribe((empdata)=>{
      console.log(empdata) 
      this.employees= empdata;
  })

  //  console.log(this.dataSource);
  }
  displayedColumns: string[] = ['code','fname','mname','lname', 'gender', 'userType','salary','pin','email','contact','dob','address1','address2'];

  // dataSource = this._service.getEmployees(); //optional to line no 20 and 21
  // dataSource = this.employees //- this does not prints data

  

  
  edit(element:any)
  {
    // console.log(element)
    this.router.navigate(["editemp",{code:element.code}]);
  }

  //for edit
  findRowFromService(id:any)
   {
    let temp={}
    this.employees.map(item=>{
      if(item.code==id)
      {
        temp = item;
      }
      return item
    })
    return temp;
    console.log("row printing")
   }

  deleteAction(element:any)
  {
    // this.router.navigate(["deleteemp",{code:element.code}]);

      //query params
      this.router.navigate(['deleteemp'],
      {queryParams:{'code':element.code}, queryParamsHandling:'merge'});
  }


  

}
