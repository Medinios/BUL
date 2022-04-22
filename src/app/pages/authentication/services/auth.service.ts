import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  createUser(data: any): Observable<any> {
    return this.httpClient.post(`${environment.base_url}users/create`, data);
  }
  login(data: any): Observable<any> {
    return this.httpClient.post(
      `${environment.base_url}users/api-token-auth`,
      data
    );
  }
}
