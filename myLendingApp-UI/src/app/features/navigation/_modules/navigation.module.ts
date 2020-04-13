import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TitlebarComponent } from '../components/titlebar/titlebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SharedModule } from '@app/shared/shared.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SidebarComponent, TitlebarComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbCollapseModule
  ],
  exports: [SidebarComponent, TitlebarComponent, FooterComponent]
})
export class NavigationModule { }
