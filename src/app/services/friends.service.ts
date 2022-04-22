import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  constructor(private httpClient: HttpClient) {}

  get_all_friends_by_team(team_id: any): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}friends/get_all_friends_by_user_team/${team_id}`
    );
  }
}
