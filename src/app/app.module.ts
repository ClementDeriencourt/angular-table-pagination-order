import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'; //a ne pas oublier pour que la fonctionnalité soit active !!
import {CdkTableModule} from '@angular/cdk/table';
import {MatSort, MatSortHeader, MatSortModule} from '@angular/material/sort'; //a ne pas oublier pour que la fonctionnalité soit active !!


@NgModule({
  declarations: [
    AppComponent,
    TablePaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
