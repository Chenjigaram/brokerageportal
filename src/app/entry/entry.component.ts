import { Component, OnInit } from '@angular/core';
import { Entries } from '../beans/entriesBean';
import { Message } from '../beans/messageBean';
import { EntriesService } from '../services/entriesService';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PopUpDialogComponent } from '../pop-up-dialog/pop-up-dialog.component';
import { Match } from '../beans/matchBean';
import { User } from '../beans/userBean';
import { MatchService } from '../services/matchService';
import { AccessRequestService } from '../services/accessRequestService';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entry: Entries = new Entries();
  message: Message;
  allMatches: Match[];
  allUsers: User[];
  entryTypes: string[] = ['PLAY', 'EATING'];
  constructor( private entryService: EntriesService, private router: Router, public dialog: MatDialog
  , private matchService: MatchService, private userService: AccessRequestService) {

  }

  ngOnInit() {
    this.matchService.getMatches().subscribe(
      response => this.allMatches = response
      );

      this.userService.getallUsers().subscribe(
        response => this.allUsers = response
        );
  }


  openDialog(data): void {
    const dialogRef = this.dialog.open(PopUpDialogComponent, {
      width: '250px',
      data: data
    });


  }


  addEntry() {
    console.log(this.entry);
      this.entryService.addEntry(this.entry).subscribe(
      res => { this.message = res as Message;
        console.log(this.message);
        if (!this.message.status) {
        this.openDialog(this.message);
        } else {
        this.entry = new Entries();
        }
        }
      );
    }

    delete() {
      console.log(this.entry);
        this.entryService.deleteEntry(this.entry).subscribe(
        res => { this.message = res as Message;
          console.log(this.message);
          if (!this.message.status) {
          this.openDialog(this.message);
          } else {
          this.entry = new Entries();
          }
          }
        );
      }

}
