import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterApiComponent } from '../register-api/register-api.component';
import { SelectPlanComponent } from '../select-plan/select-plan.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      { path: 'registerApi', component: RegisterApiComponent },
      { path: 'plans', component: SelectPlanComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RegisterModule {}
