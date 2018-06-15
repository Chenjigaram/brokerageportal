
import { Message } from '../beans/messageBean';
import { Role } from '../beans/roleBean';
import { User } from '../beans/userBean';
import {Injectable} from '@angular/core';
import {REST_URL} from '../services/auth.constant';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Match } from '../beans/matchBean';
import { Entries } from '../beans/entriesBean';
@Injectable()
export class EntriesService {
  constructor(private http: HttpClient) {
  }

  getEntriesByMatch(matchId: number): Observable<Entries[]> {
    console.log('test');
    return this.http.get(REST_URL + 'entries/matchEntries/' + matchId).pipe(map(resp => resp as Entries[]));
  }

  addEntry(entry: Entries): Observable<Message> {

   return this.http.post(REST_URL + 'entries/addEntry', entry).pipe(map(resp => resp as Message));

  }


  updateEntry(entry: Entries): Observable<Message> {

   return this.http.post(REST_URL + 'entries/updateEntry', entry).pipe(map(resp => resp as Message));

  }

  deleteEntry(entry: Entries): Observable<Message> {

    return this.http.post(REST_URL + 'entries/deleteEntry', entry).pipe(map(resp => resp as Message));

   }
  getEntriesByMatchAndUserName(matchId: number , userName: string): Observable<Entries[]> {
    console.log('test');
    return this.http.get(REST_URL + 'entries/user/' + userName + '/match' + matchId).pipe(map(resp => resp as Entries[]));
  }

  getEntriesByUser(userName: string): Observable<Entries[]> {
    console.log('test');
    return this.http.get(REST_URL + 'entries/userEntries/' + userName).pipe(map(resp => resp as Entries[]));
  }
}
