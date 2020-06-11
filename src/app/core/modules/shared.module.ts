import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from '@core/confirm-dialog/confirm-dialog.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    NgxChartsModule
  ],
  exports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    ConfirmDialogModule,
    NgxChartsModule
  ]
})
export class SharedModule { }
