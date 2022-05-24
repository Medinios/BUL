import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-next-game',
  templateUrl: './next-game.component.html',
  styleUrls: ['./next-game.component.scss'],
})
export class NextGameComponent implements OnInit {
  @Input() upNext: any;
  constructor(private GameService: GameService, private router: Router) {}

  ngOnInit(): void {}
  startGame(home: string, away: string) {
    Swal.fire('The Game is loading...');
    this.GameService.startGame(home, away).subscribe((res) => {
      this.router.navigate(['/game']);
    });
  }
}
