import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './components/bar/bar.component';
import { MovieItemComponent } from '../features/movies/movie-item/movie-item.component';
import { MovieListComponent } from '../features/movies/movie-list/movie-list.component';
import { ContextPipe } from './pipes/context.pipe';
import { HomePageComponent } from '../features/home/home-page/home-page.component';
import { RowOneComponent } from '../features/home/Pages/row-one/row-one.component';
import { RowTwoComponent } from '../features/home/Pages/row-two/row-two.component';
import { RowThreeComponent } from '../features/home/Pages/row-three/row-three.component';
import { SignInComponent } from '../features/sign-in/sign-in.component';
import { RegisterComponent } from '../features/registers/register/register.component';
import { SelectPlanComponent } from '../features/registers/select-plan/select-plan.component';
import { RegisterApiComponent } from '../features/registers/register-api/register-api.component';
import { MovieDetailsComponent } from '../features/movies/movie-details/movie-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    BarComponent,
    MovieItemComponent,
    MovieListComponent,
    ContextPipe,
    HomePageComponent,
    RowOneComponent,
    RowTwoComponent,
    RowThreeComponent,
    SignInComponent,
    RegisterComponent,
    SelectPlanComponent,
    RegisterApiComponent,
    MovieDetailsComponent,
  ],
  exports: [BarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
})
export class SharedModule {}
