import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private httpClient: HttpClient) {}

  get_todays_event_by_team_id(team_id: any): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}calendar/get_todays_event_by_team_id/${team_id}`
    );
  }
}
