import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { LoginService } from './core/services/login.service';


import { EditComponent } from './employee/edit/edit.component';


import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [

  {path:"emplist",component:EmployeeComponent},
  {path:"editemp",component:EditComponent},  //optional param





  {path:"logout",component:EmployeeComponent},
  {path:"",redirectTo:"emplist",pathMatch:'full'},
  {path:"**",component:EmployeeComponent},
];


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
