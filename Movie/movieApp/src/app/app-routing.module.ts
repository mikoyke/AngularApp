import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './features/home/home-page/home-page.component';
import { AuthGuard } from './core/auth.guard';
import { UpgradePlanComponent } from './features/registers/upgrade-plan/upgrade-plan.component';

const routes: Route[] = [
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./features/home/home-page/home-page.module').then(
  //       (m) => m.HomePageModule
  //     ),
  // },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/registers/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },

  {
    path: 'signIn',
    loadChildren: () =>
      import('./features/sign-in/sign-in.module').then((m) => m.SignInModule),
  },

  {
    path: 'movie-list',
    loadChildren: () =>
      import('./features/movies/movie-list/movie-list.module').then(
        (m) => m.MovieListModule
      ),
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'upgrade-plan', component: UpgradePlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
