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
import { HttpClientModule }from '@angular/common/http';
import { StoreModule } from '@ngrx/store' ;
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { reducer } from './services/stor/events';
import { InputAMessegeComponent } from './comps/input-amessege/input-amessege.component';
import { OpenComponent } from './comps/open/open.component';
import { RegistrationComponent } from './comps/registration/registration.component'

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { reducerPost } from './services/stor/postim';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChatComponent,
    DropdownDirective,
    ListNamsComponent,
    HomeComponent,
    InputAMessegeComponent,
    OpenComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),

    StoreModule.forRoot( {users:reducer, posts:reducerPost}, {

      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }

    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    
    
  ],
  providers: [AutoGuard,CanActivService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
