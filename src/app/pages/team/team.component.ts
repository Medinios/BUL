import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { CardsService } from 'src/app/services/cards.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team: any;
  user: AnyForUntypedForms;
  availableProducts: any[];

  selectedProducts: any[];

  draggedProduct: any;
  constructor(
    private cardsService: CardsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.selectedProducts = [];
    this.getTeamData();
  }

  getTeamData() {
    this.cardsService.get_all_cards().subscribe((res) => {
      this.availableProducts = res;
    });
  }

  findIndex(product: any) {
    let index = -1;
    for (let i = 0; i < this.availableProducts.length; i++) {
      if (product.player_name === this.availableProducts[i].player_name) {
        index = i;
        break;
      }
    }
    return index;
  }

  dragStart(product: any) {
    this.draggedProduct = product;
    console.log(product);
  }
  dragStartA(product: any) {
    this.draggedProduct = product;
    console.log(product);
  }
  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
      this.availableProducts = this.availableProducts.filter(
        (val, i) => i != draggedProductIndex
      );
      this.draggedProduct = null;
    }
    if (this.selectedProducts.length == 5) {
      console.log('im 5 man');
    }
  }

  dragEnd() {
    this.draggedProduct = null;
  }
  clear() {
    this.getTeamData();
    this.selectedProducts = [];
  }
}
