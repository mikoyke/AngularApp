import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WishListPageComponent } from './components/wish-list-page/wish-list-page.component';

const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  {
    path: 'wishList',
    component: WishListPageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
