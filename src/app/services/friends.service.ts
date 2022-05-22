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

  remove_friend_by_team_id(teamId: number): Observable<any> {
    return this.httpClient.post(
      `${environment.base_url}friends/remove_friend_by_team_id/`,
      {
        userId: teamId,
      }
    );
  }

  get_all_private_messages_user_get(): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}friends/get_all_private_messages_user_get/`
    );
  }

  get_all_private_messages_user_sent(): Observable<any> {
    return this.httpClient.get(
      `${environment.base_url}friends/get_all_private_messages_user_sent/`
    );
  }

  send_chat_message(chatObj: any): Observable<any> {
    return this.httpClient.post(
      `${environment.base_url}friends/send_chat_message/`,
      chatObj
    );
  }

  change_viewed(chat_id: number): Observable<any> {
    return this.httpClient.post(
      `${environment.base_url}friends/update_msg_viewed/`,
      { chat_id: chat_id }
    );
  }
}
