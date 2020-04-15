import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbCollapseModule
  ],
  exports: [
    CommonModule, BrowserModule, NgbCollapseModule
  ]
})
export class SharedModule { }
