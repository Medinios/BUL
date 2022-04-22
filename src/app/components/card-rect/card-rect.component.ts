import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-rect',
  templateUrl: './card-rect.component.html',
  styleUrls: ['./card-rect.component.scss'],
})
export class CardRectComponent implements OnInit {
  @Input() card: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.card);
  }
}
