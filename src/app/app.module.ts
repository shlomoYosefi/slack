import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './comps/chat/chat.component';
import { DropdownDirective } from './comps/chat/dropdown.directive';
import { AutoGuard } from './auto.guard';
import { CanActivService } from './can-activ.service';
import { ListNamsComponent } from './comps/list-nams/list-nams.component';
import { HomeComponent } from './comps/home/home.component';
import { HttpClientModule }from '@angular/common/http' ;

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChatComponent,
    DropdownDirective,
    ListNamsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutoGuard,CanActivService],
  bootstrap: [AppComponent]
})
export class AppModule { }
