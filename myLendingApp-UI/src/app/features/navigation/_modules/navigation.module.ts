import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TitlebarComponent } from '../components/titlebar/titlebar.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [SidebarComponent, TitlebarComponent, FooterComponent],
  imports: [
    SharedModule
  ],
  exports: [SidebarComponent]
})
export class NavigationModule { }
