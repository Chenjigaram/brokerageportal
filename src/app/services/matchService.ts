
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
@Injectable()
export class MatchService {
  constructor(private http: HttpClient) {
  }

  getMatches(): Observable<Match[]> {
    console.log('test');
    return this.http.get(REST_URL + 'match/allMatches').pipe(map(resp => resp as Match[]));
  }

  addMatch(match: Match): Observable<Message> {

   return this.http.post(REST_URL + 'match/addMatch', match).pipe(map(resp => resp as Message));

  }


  updateMatch(match: Match): Observable<Message> {

   return this.http.post(REST_URL + 'match/updateMatch', match).pipe(map(resp => resp as Message));

  }
  getMatch(matchId: number): Observable<Match> {
    console.log('test');
    return this.http.get(REST_URL + 'match/findMatch/' + matchId).pipe(map(resp => resp as Match));
  }
}
