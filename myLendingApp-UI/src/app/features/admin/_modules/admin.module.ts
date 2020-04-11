import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../components/users/users.component';
import { BanksComponent } from '../components/banks/banks.component';
import { AgentsComponent } from '../components/agents/agents.component';
import { LoanTypesComponent } from '../components/loan-types/loan-types.component';
import { ChargeTypesComponent } from '../components/charge-types/charge-types.component';

@NgModule({
  declarations: [
    UsersComponent, 
    BanksComponent, 
    AgentsComponent, 
    LoanTypesComponent, 
    ChargeTypesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent, 
    BanksComponent, 
    AgentsComponent, 
    LoanTypesComponent, 
    ChargeTypesComponent
  ]
})
export class AdminModule { }
