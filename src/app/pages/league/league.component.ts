import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
})
export class LeagueComponent implements OnInit {
  league: any[];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.get_league_stats().subscribe((res) => {
      this.league = res;
    });
  }
}
