import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-game',
  templateUrl: './next-game.component.html',
  styleUrls: ['./next-game.component.scss'],
})
export class NextGameComponent implements OnInit {
  @Input() upNext: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.upNext);
  }
}
