import { BanksComponent } from './../components/banks/banks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'banks',
    component: BanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
