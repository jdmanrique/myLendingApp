import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { TitlebarComponent } from './layout/components/titlebar/titlebar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { ContentLayoutComponent } from './layout/components/content-layout/content-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    SidebarComponent,
    TitlebarComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
