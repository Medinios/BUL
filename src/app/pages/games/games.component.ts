import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  friendList: any[] = [];
  displayOpenChat: boolean = false;
  teamChatId: number;
  teamName: string;
  gameRequest: any[];
  constructor(
    private friendsService: FriendsService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.getGamesRequests();
  }

  getGamesRequests() {
    this.gameService.get_game_request().subscribe((res) => {
      this.gameRequest = res;
    });
  }

  acceptGameRequest(team_id: string) {
    this.gameService.accept_game_request(team_id).subscribe((res) => {
      this.getGamesRequests();
    });
  }
}
