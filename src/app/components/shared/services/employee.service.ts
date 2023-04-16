import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  
  readonly urlAPI = environment.employeeUrl;
  path ='/api/v1/Employee';
  formData: Employee = new Employee();

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]> (`${this.urlAPI + this.path}`);
  }  

  getEmployeeById(idEmployee:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.urlAPI+ this.path}/` + idEmployee);  
  }
}
