import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './components/routing-component/guest/guest.component';
import { HomeComponent } from './components/routing-component/home/home.component';

const routes: Routes = [
  {
    path: 'guest',
    component: GuestComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', redirectTo: 'home/basic-otp', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
