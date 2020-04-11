import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { NavigationModule } from '@app/features/navigation/_modules/navigation.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    NavigationModule
  ]
})
export class CoreModule { }
