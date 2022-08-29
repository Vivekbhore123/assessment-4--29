import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './dialogelement/dialogelement';
import { ActivatedRoute } from '@angular/router';
import { EmployeeComponent } from '../employee.component';
import { LoginService } from 'src/app/core/services/login.service';
import {EmployeeService} from "../../core/services/empService/emp.service"
import {EmpData,City,State,Country} from "../../core/models/users.model"
import { CustomValidators } from 'src/app/core/validations/validators';
 
// import {Gender} from "../../core/models/users.model";





@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[DialogElementsExampleDialog,EmployeeComponent,LoginService,EmployeeService]
})
export class EditComponent implements OnInit {

 

  fname:string = "";
  mname:string = "";
  lname:string = "";
  age:number=0;
  gender:string = "";
  
   country:String = "";
   pin:Number = 0;
   state:String="";
   dob:String="";
   city:String="";
   address1:String="";
   address2:String="";

   
  constructor(private _route:ActivatedRoute,private obj:EmployeeComponent,public dialog: MatDialog,public serviceobj:LoginService,private empservice:EmployeeService,private _fb:FormBuilder){

  }

   personForm!:FormGroup;
  //  constructor() { }
   
  

 

   openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }


  EmployeeId:string|null='';

  // dataTofill:EmpData[]=[];
  dataTofill:any={};

  ngOnInit(): void {
    
    this.EmployeeId= this._route.snapshot.paramMap.get('code'); 
    console.log("testing",this.EmployeeId)
      
   
    this.empservice.getEmpById(this.EmployeeId).subscribe((item)=>{
      console.log(item);
      this.dataTofill = item;
    }); 


    this.personForm= this._fb.group({
      price:[null,[Validators.min(1),Validators.max(100),Validators.required]],
     

      fname:[''],
      mname:[''],
      lname:[''],
      age:[null],
      gender:[''],
      
       country:[''],
       pin:[null],
       state:[''],
       dob:[''],
       city:[''],
       address1:[''],
       address2:[''],

       contact:[null],
       userType:[''],
    
       //validation withour parameter
      //email:['',[Validators.required,CustomValidators.emailCheck]],
      // validation with parameter
      email:['',[Validators.required,CustomValidators.emailCheckParam('gmail')]],
     
    });

    
    

    console.log(this.dataTofill)
  }

  
  
fullName:string="";
// email:string="";


// savePerson(form:NgForm){
//   console.log(form);
//   console.log("**************");
//   console.log(typeof form.value.gender);

// }





submit() {
  console.log(this.personForm);
  console.log(this.personForm.get('name')!.errors?.['maxlength']);
}

genders:any[]=[
  {viewValue:-1,Text:"Select Gender"},
  {viewValue:1,Text:"male"},
  {viewValue:2,Text:"female"} 
];


usert:any[]=[
  {viewValue:-1,Text:"Select Usertype"},
  {viewValue:1,Text:"Contractual"},
  {viewValue:2,Text:"Permenant"} 
];


countryArray: Country[] = [
  {id:0,value: 'India', viewValue: 'India',states:[
    {id:0,value: 'Maharashtra', viewValue: 'Maharashtra',
    cities:[
      {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Nagpur', viewValue: 'Nagpur'}
    ]},
  {id:1,value: 'Bihar', viewValue: 'Bihar',
  cities:[
    {value: 'b1', viewValue: 'b1'},
  {value: 'b2', viewValue: 'b2'},
  {value: 'b3', viewValue: 'b3'}
  ]
},
  {id:2,value: 'Karnataka', viewValue: 'Karnataka',
  cities:[
    {value: 'k1', viewValue: 'k1'},
  {value: 'k2', viewValue: 'k2'},
  {value: 'k3', viewValue: 'k3'}
  ]
}
  ]},
 
];

countryIndex:number=0;
stateIndex:number=0;

detectCountryChange(country:any)
{
console.log(country);
console.log((country.target as HTMLInputElement).innerText);
this.country = (country.target as HTMLInputElement).innerText;
for(let i=0;i<this.countryArray.length;i++)
{
  if(this.countryArray[i].value==this.country)
  {
    this.countryIndex = this.countryArray[i].id;
    console.log(this.countryArray[this.countryIndex].states)
  }
}
}


detectStateChange(state:any)
{
console.log(state);
console.log((state.target as HTMLInputElement).innerText);
this.state = (state.target as HTMLInputElement).innerText;
for(let i=0;i<this.countryArray[this.countryIndex].states.length;i++)
{
  if(this.countryArray[this.countryIndex].states[i].value==this.state)
  {
    this.stateIndex = this.countryArray[this.countryIndex].states[i].id;
    // console.log(this.countryArray[this.countryIndex].states)
  }
}
}

doProcess(){
  console.log(this.countryArray);
  console.log(this.countryArray[0].states);
  this.openDialog();
}



}
