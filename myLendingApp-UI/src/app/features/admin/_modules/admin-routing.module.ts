import { BanksComponent } from './../components/banks/banks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../components/users/users.component';
import { ChargeTypesComponent } from '../components/charge-types/charge-types.component';
import { LoanTypesComponent } from '../components/loan-types/loan-types.component';
import { AgentsComponent } from '../components/agents/agents.component';

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
  },
  {
    path: 'chargetypes',
    component: ChargeTypesComponent
  },
  {
    path: 'loantypes',
    component: LoanTypesComponent
  },
  {
    path: 'agents',
    component: AgentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
