import { SharedModule } from './../../../shared/shared.module';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from '../components/dashboard.component';
import { DashboardService } from '../service/dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule
  ],
  exports:  [DashboardComponent]
})
export class DashboardModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [DashboardService]
    };
  }
}
