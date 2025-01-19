import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    children: [
      { path: 'details/:id', component: MovieDetailsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MovieListModule {}
