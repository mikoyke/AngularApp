import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieDetailResolver } from '../../../core/services/movie-detail.resolver';
import { roleGuard } from '../../../core/role.guard';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: '',

    children: [
      {
        path: 'details/:id',
        component: MovieDetailsComponent,
        resolve: { movie: MovieDetailResolver },
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
    canActivate: [roleGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MovieListModule {}
