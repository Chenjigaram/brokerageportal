
import { Message } from '../beans/messageBean';
import { Role } from '../beans/roleBean';
import { User } from '../beans/userBean';
import {Injectable} from '@angular/core';
import {REST_URL} from '../services/auth.constant';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class SignUpService {
  constructor(private http: HttpClient) {
  }

  getallRoles(): Observable<Role[]> {
    console.log('test');
    return this.http.get(REST_URL + 'signup/allRoles').pipe(map(resp => resp as Role[]));
  }

  register(user: User): Observable<Message> {

   return this.http.post(REST_URL + 'signup/register', user).pipe(map(resp => resp as Message));

  }

  getUser(userId: number): Observable<User> {

   return this.http.post(REST_URL + 'signup/getUser', userId).pipe(map(resp => resp as User));

  }

  updateUser(user: User): Observable<Message> {

   return this.http.post(REST_URL + 'signup/updateUser', user).pipe(map(resp => resp as Message));

  }
}
