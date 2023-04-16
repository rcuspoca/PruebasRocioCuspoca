import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/components/shared/models/employee';
import { EmployeeService } from 'src/app/components/shared/services/employee.service';
import { UtilitiesComponent } from 'src/app/components/shared/utilities/utilities.component';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css'],
  providers: [UtilitiesComponent]
})
export class FormEmployeeComponent {

formReactivo : FormGroup;
  mensajeError: string | any;  
  idEmployee :any ;
  constructor(
    private fb:FormBuilder,
    public employeeServ : EmployeeService
    ,private utilities: UtilitiesComponent    
    ,private router: Router,
    public path: ActivatedRoute,    
  ){     

      this.formReactivo = this.fb.group({
        firstName: ['',Validators.required],        
        secondName: ['',Validators.required],
        lastName: ['',Validators.required],
        address: ['',Validators.required],
        salary: ['',Validators.required]        
      })
  }

  ngOnInit():void {    
    this.idEmployee = this.path.snapshot.paramMap.get('id');   
    if (this.idEmployee != null)
    {
      this.loadEmployeeById();
      this.formReactivo = this.fb.group({
        'firstName': [{ value: '' }],
        'secondName': [{ value: '' }],
        'lastName': [{ value: '' }],        
        'address': [{ value: '' }],
        'salary': [{ value: '' }]
      });
    }
  }

  loadEmployeeById()
  {   
    this.employeeServ.getEmployeeById(this.idEmployee).subscribe
    (
      (resp: Employee) => {       
        this.formReactivo.patchValue({
          'firstName': resp.firstName,
          'secondName': resp.secondName,
          'lastName': resp.lastName,
          'address': resp.address,
          'salary': resp.salary
        });
      },
      err => {
        this.mensajeError = (err);
        this.utilities.errorMessageShow(err.status, this.mensajeError);        
      },
    )    
  }  

  validateLettersNumberSpaces(event: any){
    const regexpLettersNumberSpaces = /[a-zA-Z0-9 ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpLettersNumberSpaces.test(inputCharacter)) {      
      event.preventDefault();
    }
  }

  validateNumber(event: any){
    const regexpNumber = /[0-9]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {      
      event.preventDefault();
    }
  }  

  cancel() {   
    this.router.navigate(['/main-page/employee']);
  }
}
