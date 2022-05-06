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

  get_all_packs(): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}cards/get_all_card_packs`
    );
  }
}
