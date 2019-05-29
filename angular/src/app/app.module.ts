import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatPaginatorModule, MatProgressBarModule, MatSnackBarModule, MatSortModule, MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
