import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getCurrentUser(): boolean {
    if (localStorage.getItem('user')) return true;
    return false;
  }

  getUserFromDb(): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}teams/get_team_by_token`
    );
  }

  getTeamDeatils(id: string): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}teams/get_team_by_id/${id}`
    );
  }
}
