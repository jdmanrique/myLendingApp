import { NavigationModule } from '@app/features/navigation/_modules/navigation.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../components/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NavigationModule
  ],
  exports:  [DashboardComponent]
})
export class DashboardModule { }
