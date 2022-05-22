import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  packs: any[];
  gotCards: any[];
  display: boolean = false;
  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardsService.get_all_packs().subscribe((res) => {
      this.packs = res;
    });
  }

  buyCardPack(packId: number) {
    this.cardsService.buy_card_pack(packId).subscribe((res) => {
      this.gotCards = res;
      this.display = true;
    });

    console.log(packId);
  }
}
