import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MatMenuModule } from '@angular/material/menu';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    CommonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    AngularMaterialModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,

  ],
  exports: [
    LoginComponent, RegisterComponent, ProfileComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
