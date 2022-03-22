import { Component} from '@angular/core';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  Roles: any = ['Admin', 'Recruiter','Panelist'];
  constructor() { }

  ngOnInit(): void {
  }

}
