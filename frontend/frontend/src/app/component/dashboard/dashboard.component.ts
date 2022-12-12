import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../common/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../../service/user.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];
  isChecked = false;
  accepted = false;
  //isDeparted = new Date();
  isDeparted = new Date()


  //displayedColumns: string[] = ['arrival_time', 'departure_time', 'guest_name', 'guest_company', 'phone_number', 'host_employee', 'area'];
  displayedColumns: string[] = ['arrival_time', 'guest_name', 'guest_company', 'phone_number', 'host_employee', 'area'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dashboardTitle = "Dashboard";

  constructor(private service: UserService, private titleService: Title) {
    this.titleService.setTitle(this.dashboardTitle);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllUsers() {
    this.service.getUserForm().subscribe({
      next: (response) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert("Error while fetching the records");
      }
    })
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
