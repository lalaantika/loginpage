import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'logout',
    component:  LogOutComponent
  },

  {
    path: 'home',
    component:  HomeComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
