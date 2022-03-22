import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLoggedIn = false;
  form: any = {
    Username: null,
    Password: null
  };
  public form1: FormGroup = new FormGroup({
    userName: new FormControl(''),
  });
  getUsername(){
    alert("Username Entered: " + this.form.Username + "  Password Entered: " +this.form.Password );
   // alert(this.form.Password);

  }
  verify(){
    if(this.form.Username=="Rutvik" && this.form.Password=="Password")
    alert("Login Succesful");
    else
    alert("Login failed!!!!!");
  }


  constructor() { }

  ngOnInit(): void {
  }

}
