import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormEmployeeComponent } from './employee/form-employee/form-employee.component';

const routes: Routes = [
  {path:'', component : MainPageComponent, children:[
    {path:'employee', component: EmployeeComponent},    
    {path: 'editEmployee/:id', component: FormEmployeeComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
