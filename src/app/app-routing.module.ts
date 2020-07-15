import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { ChatComponent } from './comps/chat/chat.component';


const routes: Routes = [
  {path:"", component:SignInComponent},
  {path:"chat", component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
