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
import { DragDropModule } from 'primeng/dragdrop';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';

import { MainComponent } from './pages/main/main.component';
import { NextGameComponent } from './components/main/next-game/next-game.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/authentication/login/login.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendsComponent } from './components/main/friends/friends.component';
import { CardRectComponent } from './components/card-rect/card-rect.component';
import { TeamComponent } from './pages/team/team.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { BuyComponent } from './components/buy/buy.component';
import { FriendsListComponent } from './pages/friends/friends.component';
import { CardsComponent } from './pages/cards/cards.component';
import { ChatComponent } from './pages/chat/chat.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesComponent } from './pages/chat/messages/messages.component';
import { MessageComponent } from './pages/chat/messages/message/message.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GameComponent } from './pages/game/game.component';
import { LogsComponent } from './components/game/logs/logs.component';
import { PointsComponent } from './components/game/points/points.component';
import { LeagueComponent } from './pages/league/league.component';
import { GamesComponent } from './pages/games/games.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
    TeamComponent,
    HeaderComponent,
    TeamCardComponent,
    BuyComponent,
    FriendsListComponent,
    CardsComponent,
    ChatComponent,
    MessagesComponent,
    MessageComponent,
    ProfileComponent,
    GameComponent,
    LogsComponent,
    PointsComponent,
    LeagueComponent,
    GamesComponent,
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
    DragDropModule,
    InputTextareaModule,
    TabViewModule,
    AccordionModule,
    SweetAlert2Module.forRoot(),
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
