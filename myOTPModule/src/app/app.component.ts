import { Component } from '@angular/core';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  openOtpDialog(): void {
    const dialogRef = this.dialog.open(OtpDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Received OTP: ', result);
    });
  }
}
