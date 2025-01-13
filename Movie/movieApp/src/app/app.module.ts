import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';

import { ContextPipe } from './components/movie-item/context.pipe';
import { BarComponent } from './shared/components/bar/bar.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { RowOneComponent } from './components/home/HomePages/row-one/row-one.component';
import { RowTwoComponent } from './components/home/HomePages/row-two/row-two.component';
import { RowThreeComponent } from './components/home/HomePages/row-three/row-three.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieListComponent,
    ContextPipe,
    BarComponent,
    HomePageComponent,
    RowOneComponent,
    RowTwoComponent,
    RowThreeComponent,
    SignInComponent,
    RegisterComponent,
    SelectPlanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
