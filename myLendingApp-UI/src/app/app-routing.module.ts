import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@app/features/dashboard/components/dashboard.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
        import('@app/features/dashboard/_modules/dashboard-routing.module').then(
            m => m.DashboardRoutingModule
        ),
  },
  {
    path: 'manage',
    loadChildren: () =>
        import('@app/features/admin/_modules/admin-routing.module').then(
            m => m.AdminRoutingModule
        ),
  },
  {
    path: 'workspace',
    redirectTo: '/'
  },
  {
    path: 'masterfile',
    redirectTo: '/'
  },
  {
    path: 'funding',
    redirectTo: '/'
  },
  {
    path: 'reports',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
