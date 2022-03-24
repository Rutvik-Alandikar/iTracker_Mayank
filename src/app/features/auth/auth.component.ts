import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  ngOnInit(): void {}
/*

  isLoggedIn = false;
  isLoggedOff=true;
  form: any = {
    Username: null,
    Password: null,
  };

  //constructor(private route:Router){}
  private router:Router;
  constructor(private _snackBar: MatSnackBar) {}
  //public _snackBar: MatSnackBar=new MatSnackBar();

  getUsername() {
    alert(
      'Username Entered: ' +
        this.form.Username +
        '  Password Entered: ' +
        this.form.Password
    );
    // alert(this.form.Password);
  }
  verify() {
    this.openSnackBar(this.form.Username,this.form.Password);
    if (this.form.Username == 'Rutvik' && this.form.Password == 'Password') {
      alert('Login Succesful');
      this.openSnackBar(this.form.Username,this.form.Password);
      this.isLoggedIn = true;
      this.isLoggedOff=false;
      this.go();
      } else alert('Login failed!!!!!');
  }
  go(){
		this.router.navigate(['profile']); // navigate to other page
	}

 // constructor() {}


  openSnackBar(message: string, action:string) {
    if (message == 'Rutvik' && action == 'Password') {
    this._snackBar.open("Welcome :"+ message,"",{duration: 2000 });
   // this.reloadPage();
   this.router.navigate(['profile']);

  }else if(message == 'Rutvik')
  this._snackBar.open("Incorrect Password ","",{duration: 2000 });
  else
  this._snackBar.open("Incorrect Username or Password ","",{duration: 2000 });
  }
  reloadPage(): void {
    window.location.assign("localhost:4200/profile");
  }
  */

}
