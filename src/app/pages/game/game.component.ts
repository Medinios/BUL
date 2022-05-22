import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  points: any = { a: 0, b: 0 };
  constructor() {}

  ngOnInit(): void {}
  score(event: any) {
    console.log(event);
    const p = event.split(',');
    this.points = { a: p[0], b: p[1] };
  }

  gameOver(event: any) {
    console.log(event);
  }
}
