import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { AutoGuard } from './auto.guard';
import { HomeComponent } from './comps/home/home.component';
import { OpenComponent } from './comps/open/open.component';
import { RegistrationComponent } from './comps/registration/registration.component';


const routes: Routes = [
  {path:"", component:OpenComponent},
  {path:"home", component:HomeComponent , canActivate:[AutoGuard]},
  {path:"logIn", component:SignInComponent , /*canActivate:[AutoGuard]*/},
  {path:"registration", component:RegistrationComponent , /*canActivate:[AutoGuard]*/},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
