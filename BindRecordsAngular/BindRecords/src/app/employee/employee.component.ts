import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../model/iuser';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  allUser:IUser[];
  dataSource: MatTableDataSource<IUser>;
  displayedColumns: string[] = ['UserId', 'UserName', 'EmailId', 'Gender','Address','MobileNo','PinCode'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

constructor(private service: EmployeeService,){
  this.service.AllUserDetails().subscribe(data =>{
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

