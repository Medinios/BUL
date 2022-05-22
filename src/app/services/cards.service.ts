import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private httpClient: HttpClient) {}

  get_all_cards(): Observable<any> {
    return this.httpClient.get(`${environment.base_url}cards/get`);
  }

  get_opening_five(): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}cards/card_get_five_open`
    );
  }

  get_all_packs(): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}cards/get_all_card_packs`
    );
  }

  set_five_opening(cards: any[]): Observable<any> {
    return this.httpClient.post(
      `${environment.base_url}cards/set_opening_team/`,
      { cards: cards }
    );
  }

  buy_card_pack(packId: number): Observable<any> {
    return this.httpClient.post(`${environment.base_url}cards/buy_card_pack/`, {
      pack_id: packId,
    });
  }
}
