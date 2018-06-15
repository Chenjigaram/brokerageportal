
import {Message} from '../beans/messageBean';

import {Role} from '../beans/roleBean';

import {User} from '../beans/userBean';
import {Injectable, OnInit} from '@angular/core';
import {REST_URL, ROLE_NAMES, TEAM_NAMES} from '../services/auth.constant';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AccessRequestService {

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {



  }

  getallRequests(): Observable<User[]> {

    return this.http.get(REST_URL + 'accessRequest/getaccessRequests').pipe(map(resp => resp as User[]));
  }

  getallUsers(): Observable<User[]> {

    return this.http.get(REST_URL + 'accessRequest/getAllUsers').pipe(map(resp => resp as User[]));
  }


  updateUser(user: User): Observable<Message> {

    return this.http.post(REST_URL + 'accessRequest/updateUser', user).pipe(map(resp => resp  as Message));

  }

  rejectUser(user: User): Observable<Message> {

    return this.http.post(REST_URL + 'accessRequest/rejectUser', user).pipe(map(resp => resp as Message));

  }

  deleteUser(user: User): Observable<Message> {

    return this.http.post(REST_URL + 'accessRequest/deleteUser', user).pipe(map(resp => resp as Message));

  }

}
