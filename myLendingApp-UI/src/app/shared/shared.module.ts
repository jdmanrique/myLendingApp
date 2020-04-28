import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbCollapseModule,
    IconsModule
  ],
  exports: [
    CommonModule, BrowserModule, NgbCollapseModule, IconsModule
  ]
})
export class SharedModule { }
