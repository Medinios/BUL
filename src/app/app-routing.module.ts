import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { CardsComponent } from './pages/cards/cards.component';
import { MessagesComponent } from './pages/chat/messages/messages.component';
import { FriendsListComponent } from './pages/friends/friends.component';
import { GameComponent } from './pages/game/game.component';
import { MainComponent } from './pages/main/main.component';
import { TeamComponent } from './pages/team/team.component';
const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'team', component: TeamComponent, pathMatch: 'full' },
  { path: 'friends', component: FriendsListComponent, pathMatch: 'full' },
  { path: 'cards', component: CardsComponent, pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent, pathMatch: 'full' },
  { path: 'game', component: GameComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
