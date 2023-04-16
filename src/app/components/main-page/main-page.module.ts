import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../login/login.component';
import { MainPageComponent } from './main-page.component';
import { FormEmployeeComponent } from './employee/form-employee/form-employee.component';


@NgModule({
  declarations: [
    MainPageComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeComponent,
    FormEmployeeComponent
    
  ],
  imports: [    
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule { }
