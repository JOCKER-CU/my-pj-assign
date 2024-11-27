import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NgOtpInputModule } from 'ng-otp-input';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpDialogComponent  // Add your dialog component here
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgOtpInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }