import { AccessRequestService } from '../services/accessRequestService';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , private accessrequestService: AccessRequestService) { }

  onNoClick(): void {


    this.dialogRef.close();
  }

  accept() {
  this.accessrequestService.updateUser(this.data).subscribe(
  res => {

    this.dialogRef.close(res);
  }
  );

  }

  reject() {
  this.accessrequestService.rejectUser(this.data).subscribe(
  res => {

    this.dialogRef.close(res);
  }
  );

  }


}
