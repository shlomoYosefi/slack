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

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChatComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AutoGuard,CanActivService],
  bootstrap: [AppComponent]
})
export class AppModule { }
