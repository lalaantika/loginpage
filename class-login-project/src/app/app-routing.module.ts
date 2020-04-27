import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {LogOutComponent} from './log-out/log-out.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'login',
    component:  LogInComponent
  },
  {
    path: 'logout',
    component:  LogOutComponent
  },
  {
    path: 'signup',
    component:  SignUpComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
