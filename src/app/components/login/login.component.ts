import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { parameterizations } from '../shared/constant';
import { UtilitiesComponent } from '../shared/utilities/utilities.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UtilitiesComponent]
})
export class LoginComponent {

  formulario: FormGroup;


  constructor(private fb: FormBuilder
    ,private _snackBar: MatSnackBar
    ,private utilities: UtilitiesComponent
    ,private router:Router
    ){

      this.formulario= this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]
    })
  }

  // authentication's simulation 
  validate(){   
    if(this.formulario.value.user ==  parameterizations.user && this.formulario.value.password == parameterizations.password){
        this.router.navigate(['main-page']);
    }else{
      this.utilities.openSnackBar("User/Password invalid","X","orange-snackbar")
    }
  }
}


