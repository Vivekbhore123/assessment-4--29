import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, Subject, ReplaySubject } from 'rxjs';
import { PeriodicElement, UserType, EmpData } from "../models/users.model"

@Injectable({
  providedIn: "root"
})
export class LoginService implements CanActivate {

  userM: string = "";
  passM: string = "";
  status: boolean = false;

  TempSubject$: any = new Subject();



  userlongarray: any[] = [];

  userlongURL: string = 'api/users'; //this will work out
  constructor(private _http: HttpClient, private router: Router) { }


  getUserLongArr(): Observable<PeriodicElement[]> {
    return this._http.get<PeriodicElement[]>(this.userlongURL)
      .pipe(catchError(this.handleError));
  }



  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);

    if (errorResponse.error instanceof ErrorEvent) {
      console.log(errorResponse.message);
    }
    else {
      console.log(errorResponse.message);
    }
    return throwError(() => {
      return 'Something wrong occur!!';
    });


  }


  //  private isUserLogin:boolean=false;
  temp:any= {
    username: "",
    status: false
  }

  dosomething() {

   
    let subject = new ReplaySubject();

    let username = localStorage.getItem("userM")
    let password = localStorage.getItem("passM")
    let flag=0;

    this._http.get<PeriodicElement[]>(this.userlongURL).subscribe((data) => {
      data.map(item => {

        console.log(item + "from array")
        let un = item.username
        let pw = item.password
        console.log(un + "  " + pw + "  from array")
        if (username == un && password == pw) {

          // alert("details matched")
          flag=1;
          this.status=true;
          this.status = true;
          this.temp = {
            username: un,
            status: true
          }
        }
      })

      if(flag==1)
      subject.next(this.temp);
      else
      subject.next({
        username: "",
        status: false
      });
      subject.complete();
    });
    return subject
  }

  async setCredentials(userM: string, passM: string) {
    this.userM = userM;
    this.passM = passM;
    localStorage.setItem("userM", this.userM)
    localStorage.setItem("passM", this.passM)

    return;
  }



  authenticate() {
    return this.temp
  }






  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // this wil only check if there's a token
    // this doesn't means that the token is valid!
    // optionally you can also validate the token on the server
    // each time this guard is invoked
    // but that ofcourse could be a lot of calls
    
    
   let uname = localStorage.getItem("userM");
   if(localStorage.getItem("userM"))
   {
    return true
   }
  //  alert(uname)

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }


}