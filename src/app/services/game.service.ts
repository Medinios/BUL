import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private httpClient: HttpClient) {}

  get_logs_for_game(logNumber: number): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}/game/get_logs/${logNumber}`
    );
  }
}
