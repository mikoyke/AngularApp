import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './components/bar/bar.component';
import { MovieItemComponent } from '../components/movies/movie-item/movie-item.component';
import { MovieListComponent } from '../components/movies/movie-list/movie-list.component';
import { ContextPipe } from './pipes/context.pipe';
import { HomePageComponent } from '../components/home/home-page/home-page.component';
import { RowOneComponent } from '../components/home/Pages/row-one/row-one.component';
import { RowTwoComponent } from '../components/home/Pages/row-two/row-two.component';
import { RowThreeComponent } from '../components/home/Pages/row-three/row-three.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { RegisterComponent } from '../components/registers/register/register.component';
import { SelectPlanComponent } from '../components/registers/select-plan/select-plan.component';
import { RegisterApiComponent } from '../components/registers/register-api/register-api.component';
import { MovieDetailsComponent } from '../components/movies/movie-details/movie-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';

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
  ],
})
export class SharedModule {}
