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

  update_game_end(team_id: string, date: string): Observable<any> {
    debugger;
    return this.httpClient.post(
      `${environment.base_url}calendar/update_event_to_done/`,
      {
        team_id: team_id,
        date: date,
      }
    );
  }

  get_game_request(): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}calendar/get_all_game_requests/`
    );
  }

  invite_for_game(team_id: string): Observable<any> {
    return this.httpClient.post(
      `${environment.base_url}calendar/invite_game/`,
      {
        team_id: team_id,
      }
    );
  }
  accept_game_request(team_id: string): Observable<any> {
    return this.httpClient.post(
      `${environment.base_url}calendar/accept_game_request/`,
      {
        team_id: team_id,
      }
    );
  }

  startGame(home: string, away: string): Observable<any> {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    const date = yyyy + '-' + mm + '-' + dd;
    return this.httpClient.get(
      `${environment.base_url}game/start_game/${home}/${away}/${date}`
    );
  }

  get_league_stats(): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}leagues/get_league_statistics/`
    );
  }

  done_game(): Observable<any> {
    return this.httpClient.get(`${environment.base_url}game/done_game/`);
  }
}
