import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Route[] = [
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plans', component: SelectPlanComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'movie-list', component: MovieListComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
