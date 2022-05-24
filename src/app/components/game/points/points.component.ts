import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss'],
})
export class PointsComponent implements OnInit {
  @Input() homeTeam?: any;
  @Input() awayTeam?: any;
  @Input() score: any;

  constructor() {}

  ngOnInit(): void {}
}
