import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss'],
})
export class PointsComponent implements OnInit {
  @Input() teams?: any;
  @Input() score: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.score);
  }
}
