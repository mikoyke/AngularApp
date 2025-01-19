import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './features/home/home-page/home-page.component';

const routes: Route[] = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
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
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
