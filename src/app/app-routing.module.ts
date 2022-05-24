import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { CardsComponent } from './pages/cards/cards.component';
import { MessagesComponent } from './pages/chat/messages/messages.component';
import { FriendsListComponent } from './pages/friends/friends.component';
import { GameComponent } from './pages/game/game.component';
import { GamesComponent } from './pages/games/games.component';
import { LeagueComponent } from './pages/league/league.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TeamComponent } from './pages/team/team.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'team',
    component: TeamComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'friends',
    component: FriendsListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'cards',
    component: CardsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'messages',
    component: MessagesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'game',
    component: GameComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'myLeague',
    component: LeagueComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'games',
    component: GamesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
