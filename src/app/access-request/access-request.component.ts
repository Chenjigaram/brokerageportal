import {Message} from '../beans/messageBean';
import {User} from '../beans/userBean';
import { DialogComponent } from '../dialog/dialog.component';
import {AccessRequestService} from '../services/accessRequestService';
import { UserService } from '../services/user.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html',
  styleUrls: ['./access-request.component.css']
})
export class AccessRequestComponent implements OnInit {


  reqUsers: User[];
  messageResponse: Message;
  displayedColumns = ['firstName', 'userName', 'userId', 'accountStatus'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  matreqUsers: MatTableDataSource<User>;

  constructor(private accessrequestService: AccessRequestService , public dialog: MatDialog , private router: Router,
    private userService: UserService) {

  }

  ngOnInit() {

    this.getReqUsers();

  }

  openDialog(data): void {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this. getReqUsers();
    });
  }

  getReqUsers() {

    if ( !this.userService.roleNames.includes('STANDARD_USER') ) {
    this.accessrequestService.getallRequests().subscribe(
      response => {
      this.reqUsers = response;
        this.matreqUsers = new MatTableDataSource(this.reqUsers);
        console.log(this.matreqUsers);
         this.matreqUsers.paginator = this.paginator;
         this.matreqUsers.sort = this.sort;
      }
    );
    } else {

     this.reqUsers = [];

        this.matreqUsers = new MatTableDataSource(this.reqUsers);

         this.matreqUsers.paginator = this.paginator;
         this.matreqUsers.sort = this.sort;


    }

  }



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.matreqUsers.filter = filterValue;
  }






}
