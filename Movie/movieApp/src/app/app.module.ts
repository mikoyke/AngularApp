import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './components/movies/movie-item/movie-item.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { HomePageComponent } from './components/home/home-page/home-page.component';
import { RowOneComponent } from './components/home/Pages/row-one/row-one.component';

import { RowThreeComponent } from './components/home/Pages/row-three/row-three.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/registers/register/register.component';
import { SelectPlanComponent } from './components/registers/select-plan/select-plan.component';
import { SharedModule } from './shared/shared.module';
import { RowTwoComponent } from './components/home/Pages/row-two/row-two.component';
import { ContextPipe } from './components/movies/movie-item/context.pipe';
import { RegisterApiComponent } from './components/registers/register-api/register-api.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TrailerDialogComponent } from './components/movies/trailer-dialog/trailer-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
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
    TrailerDialogComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    YouTubePlayerModule,
    MatDialogModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
  ],
})
export class AppModule {}
