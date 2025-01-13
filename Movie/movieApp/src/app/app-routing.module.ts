import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'plan-selection', component: SelectPlanComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
