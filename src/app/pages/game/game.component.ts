import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  points: any = { a: 0, b: 0 };
  homeTeam: any;
  awayTeam: any;
  date: any;
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    Swal.close();
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    this.date = yyyy + '-' + mm + '-' + dd;
    // document.write(today);
    this.gameService.get_logs_for_game(0).subscribe((res) => {
      this.homeTeam = res.home_team;
      this.awayTeam = res.away_team;
    });
  }
  score(event: any) {
    const p = event.split(',');
    this.points = { a: p[0], b: p[1] };
  }

  gameOver(event: any) {
    Swal.fire('The Game ended!...');
  }
}
