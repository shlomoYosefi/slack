import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { AutoGuard } from './auto.guard';
import { HomeComponent } from './comps/home/home.component';


const routes: Routes = [
  {path:"", component:SignInComponent},
  {path:"home", component:HomeComponent , /*canActivate:[AutoGuard]*/}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
