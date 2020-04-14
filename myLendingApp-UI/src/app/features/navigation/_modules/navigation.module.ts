import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TitlebarComponent } from '../components/titlebar/titlebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavHighlighterDirective } from '@app/shared/directives/nav-highlighter.directive';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [SidebarComponent, TitlebarComponent, FooterComponent],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    NgbCollapseModule
  ],
  exports: [SidebarComponent, TitlebarComponent, FooterComponent]
})
export class NavigationModule { }
