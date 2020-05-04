import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { TitlebarComponent } from './layout/components/titlebar/titlebar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { ContentLayoutComponent } from './layout/components/content-layout/content-layout.component';
import { SearchComponent } from './layout/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    SidebarComponent,
    TitlebarComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
