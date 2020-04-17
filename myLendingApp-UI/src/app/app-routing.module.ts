import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@app/features/dashboard/components/dashboard.component';
import { ContentLayoutComponent } from './layout/components/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin',
    loadChildren: () =>
        import('@app/features/admin/_modules/admin-routing.module').then(
            m => m.AdminRoutingModule
        ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
