import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { CardsService } from 'src/app/services/cards.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  display: boolean = false;
  showCards: boolean = false;
  counter: number = 3;
  user: string | null = '';
  nextGame: any = {};
  cards: any;
  showDialog() {
    this.showCards = false;
    this.display = true;

    setTimeout(() => {
      this.counter = 3;
    }, 1000);
    setTimeout(() => {
      this.counter = 2;
    }, 2000);
    setTimeout(() => {
      this.counter = 1;
    }, 3000);
    setTimeout(() => {
      this.showCards = true;
      this.counter = 0;
    }, 6000);
  }
  constructor(
    private userService: UserService,
    private calendarService: CalendarService,
    private cardsService: CardsService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.getNextEvent();
    this.getCards();
  }

  getNextEvent() {
    this.calendarService.get_todays_event_by_team_id(2).subscribe((res) => {
      console.log(res);
      this.nextGame = res;
    });
  }

  getCards() {
    this.cardsService.get_opening_five().subscribe((res) => {
      this.cards = res;
    });
  }
}
