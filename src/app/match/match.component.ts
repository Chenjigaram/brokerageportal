import { Component, OnInit } from '@angular/core';
import { Match } from '../beans/matchBean';
import { Message } from '../beans/messageBean';
import { MatchService } from '../services/matchService';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PopUpDialogComponent } from '../pop-up-dialog/pop-up-dialog.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  allMatches: Match[];
  match: Match = new Match();
  message: Message;
  updateMatch: Match = new Match();
  matchId: number;

  constructor(private matchService: MatchService, private router: Router, public dialog: MatDialog) {
    this.allMatches = [];
  }


  ngOnInit() {
    this.matchService.getMatches().subscribe(
      response => this.allMatches = response
      );
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(PopUpDialogComponent, {
      width: '250px',
      data: data
    });


  }


  addMatch() {


    console.log(this.match);
    this.match.matchDate.setMinutes( this.match.matchDate.getMinutes() - this.match.matchDate.getTimezoneOffset() );
    console.log(this.match);
      this.matchService.addMatch(this.match).subscribe(
      res => { this.message = res as Message;
        console.log(this.message);
        if (!this.message.status) {
        this.openDialog(this.message);
        } else {
        this.match = new Match();
        }
        }
      );
    }

updateMatches() {

  console.log(this.updateMatch);
  this.updateMatch.matchDate.setMinutes( this.updateMatch.matchDate.getMinutes() - this.updateMatch.matchDate.getTimezoneOffset() );
  this.matchService.updateMatch(this.updateMatch).subscribe(
  res => { this.message = res as Message;
    console.log(this.message);
    if (!this.message.status) {
    this.openDialog(this.message);
    } else {
    this.updateMatch = new Match();
    }
    }
  );
}

getMatch() {

  this.matchService.getMatch(this.matchId).subscribe(
    response => {
      this.updateMatch = response;
      this.updateMatch.matchDate = new Date(response.matchDate);
      this.updateMatch.matchDate.setMinutes( this.updateMatch.matchDate.getMinutes() - this.updateMatch.matchDate.getTimezoneOffset() );

    }
    );

}

}

