import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieDetailResolver } from '../movie-details/movie-detail.resolver';

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
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MovieListModule {}
