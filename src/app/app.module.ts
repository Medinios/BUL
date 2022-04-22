import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './core/interceptors/interceptor.service';
//prime ng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { MainComponent } from './pages/main/main.component';
import { NextGameComponent } from './components/main/next-game/next-game.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/authentication/login/login.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendsComponent } from './components/main/friends/friends.component';
import { CardRectComponent } from './components/card-rect/card-rect.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NextGameComponent,
    RegisterComponent,
    LoginComponent,
    CardComponent,
    FriendsComponent,
    CardRectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
