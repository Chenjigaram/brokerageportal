import { Component, OnInit, ViewChild } from '@angular/core';
import { EntriesService } from '../services/entriesService';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Entries } from '../beans/entriesBean';
import { Message } from '../beans/messageBean';
import { Match } from '../beans/matchBean';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.css']
})
export class ViewEntryComponent implements OnInit {


  matchEntries: Entries[];
  allMatches: Match[];
  messageResponse: Message;
  matchId: number;
  displayedColumns = ['description', 'userName', 'matchRate', 'entryType', 'betAmount', 'betTeam'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  matchEntry: MatTableDataSource<Entries>;

  constructor(private entriesService: EntriesService , public dialog: MatDialog , private router: Router,
    private userService: UserService) {

  }

  ngOnInit() {

    this.matchentries();

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
      this. matchentries();
    });
  }

  matchentries() {

    if ( !this.userService.roleNames.includes('STANDARD_USER') ) {
    this.entriesService. getEntriesByMatchAndUserName(this.matchId, this.userService.username).subscribe(
      response => {
      this.matchEntries = response;
        this.matchEntry = new MatTableDataSource(this.matchEntries);
        console.log(this.matchEntry);
         this.matchEntry.paginator = this.paginator;
         this.matchEntry.sort = this.sort;
      }
    );
    } else {

      this.entriesService. getEntriesByMatch(this.matchId).subscribe(
        response => {
        this.matchEntries = response;
          this.matchEntry = new MatTableDataSource(this.matchEntries);
          console.log(this.matchEntry);
           this.matchEntry.paginator = this.paginator;
           this.matchEntry.sort = this.sort;
        }
      );


    }

  }



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.matchEntry.filter = filterValue;
  }


}
