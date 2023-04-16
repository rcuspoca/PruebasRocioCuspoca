import { Component, ViewChild } from '@angular/core';
import { Employee } from '../../shared/models/employee';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilitiesComponent } from '../../shared/utilities/utilities.component';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [UtilitiesComponent]
})
export class EmployeeComponent {
  employeeList : Employee[] = [];
  displayColumns : string[] = ['firstName', 'secondName', 'lastName', 'address','salary','anualSalary','actions' ];
  dataSource: MatTableDataSource<Employee> | any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public employeeServ : EmployeeService
    ,private utilities: UtilitiesComponent   
    )    
    {
      this.dataSource = new MatTableDataSource(this.employeeList);      
    } 

    ngOnInit(): void {
      this.loadEmployeeList();  
    }

    public loadEmployeeList(){
      this.employeeServ.getEmployeeList().subscribe(
        (response:Employee[]) =>{        
          if (response){
            this.dataSource.data = response.sort((a,b) => a.lastName.localeCompare(b.lastName));
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        },
        error => {
          console.log("Error al consultar el servicio:", error.error);    
          this.utilities.openSnackBar("Employee Query Failed","X","orange-snackbar")    
        });    
    }

    searchByFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;    
      this.dataSource.sort = this.sort;
    }
}
