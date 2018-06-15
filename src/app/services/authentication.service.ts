import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import { map } from 'rxjs/operators';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, REST_URL} from '../services/auth.constant';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  static AUTH_TOKEN = 'oauth/token';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;
    const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD)
  })
};

    console.log(body);
    return this.http.post(REST_URL + AuthenticationService.AUTH_TOKEN, body, httpOptions)
      .pipe(map((res: any) => {

        if (res.access_token) {
          return res.access_token;
        }
        return null;
      }));
  }


}
