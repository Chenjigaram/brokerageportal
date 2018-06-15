import {Injectable} from '@angular/core';


import {TOKEN_NAME, REST_URL, TEAM_NAMES, ROLE_NAMES, USER_NAME} from '../services/auth.constant';
import { SignUpService } from './signupService';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UserService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  accessToken: string;
  isAdmin: boolean;
  roleNames: string[];
  username: string;
  constructor(private http: HttpClient) {

   if (sessionStorage.getItem(ROLE_NAMES)) {


    this.roleNames = JSON.parse(sessionStorage.getItem(ROLE_NAMES));
    }
     if (sessionStorage.getItem(USER_NAME)) {

    this.username = sessionStorage.getItem(USER_NAME);

    } else {

     this.username = 'Buddy';
     }


  }

  login(accessToken: string, username: string) {

    const decodedToken = this.jwtHelper.decodeToken(accessToken);

     sessionStorage.setItem(USER_NAME, username);
    this.roleNames = decodedToken.authorities;
    if (this.roleNames) {
        this.setroleNames(username);
    }

    this.isAdmin = this.roleNames.some(el => el === 'ADMIN_USER');
     this.accessToken = accessToken;
    localStorage.setItem(TOKEN_NAME, accessToken);
     this.username = username;

  }

  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
    sessionStorage.removeItem(ROLE_NAMES);
    sessionStorage.removeItem(USER_NAME);
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }

  getroleNames(): string[] {

  return this.roleNames;
  }



  setroleNames(userName: string) {

     this.http.post(REST_URL + 'account/getRoleNames', userName).subscribe(res => { this.roleNames = res as string[] ;

     sessionStorage.setItem(ROLE_NAMES, JSON.stringify(this.roleNames));

     });
  }

}
