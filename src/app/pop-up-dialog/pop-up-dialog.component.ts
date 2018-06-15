import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pop-up-dialog',
  templateUrl: './pop-up-dialog.component.html',
  styleUrls: ['./pop-up-dialog.component.css']
})
export class PopUpDialogComponent  {



  constructor(
    public dialogRef: MatDialogRef<PopUpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  onNoClick(): void {


    this.dialogRef.close();
  }

}
