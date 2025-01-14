import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/registers/register/register.component';
import { SelectPlanComponent } from './components/registers/select-plan/select-plan.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RegisterApiComponent } from './components/registers/register-api/register-api.component';

const routes: Route[] = [
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/registerApi', component: RegisterApiComponent },
  { path: 'register/plans', component: SelectPlanComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'movie-list', component: MovieListComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
