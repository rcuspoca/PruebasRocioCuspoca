import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.css']
})
export class UtilitiesComponent {

  constructor(
    private _snackBar: MatSnackBar
  ){}

  openSnackBar(message: string, action: string, clase: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [clase]
    });
  }

  errorMessageShow(error: number, mensaje: string) {

    switch (error) {
      case 200:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("Successful operation!.", "X", "green-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "green-snackbar");
        }
        break;
      case 201:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("Successful operation!.", "X", "green-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "green-snackbar");
        }
        break;
      case 500:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("An internal error occurred while performing the operation (500 Internal Server Error).", "X", "red-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "red-snackbar");
        }
        break;
      case 404:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("The request resource could not be found, please try again later!", "X", "blue-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "blue-snackbar");
        }
        break;
      case 400:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("The server cannot or will not process the request due to a client syntax error (wrong parameters).", "X", "orange-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "orange-snackbar");
        }
        break;
      default:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("Error when making the http request, please validate with the system administrator!.", "X", "orange-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "orange-snackbar");
        }
        break;
    }    
  } 

  
}
