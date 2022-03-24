import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  form: any = {
    Username: null,
    Password: null,
  };

  constructor(private router:Router,private _snackBar: MatSnackBar){}

  getUsername() {
    alert(
      'Username Entered: ' +
        this.form.Username +
        '  Password Entered: ' +
        this.form.Password
    );

  }
  verify() {
    this.openSnackBar(this.form.Username,this.form.Password);
    if (this.form.Username == 'Rutvik' && this.form.Password == 'Password') {
      alert('Login Succesful');
      this.router.navigate(['profile']);
    this.openSnackBar(this.form.Username,this.form.Password);
      this.isLoggedIn = true;
      this.router.navigate(['profile']);
      } else alert('Login failed!!!!!');
  }

 // constructor() {}
  go(){
    this.router.navigate(['profile']);
  }
  goRegister(){
    this.router.navigate(['register']);
  }
  ngOnInit(): void {}
  openSnackBar(message: string, action:string) {
    if (message == 'Rutvik' && action == 'Password') {
    this._snackBar.open("Welcome :"+ message,"",{duration: 2000 });

  }else if(message == 'Rutvik')
  this._snackBar.open("Incorrect Password ","",{duration: 2000 });
  else
  this._snackBar.open("Incorrect Username or Password ","",{duration: 2000 });
  }


}

