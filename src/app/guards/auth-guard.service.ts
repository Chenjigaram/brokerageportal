import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import {TOKEN_NAME} from '../services/auth.constant';
import {UserService} from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const helper = new JwtHelperService();
    if (helper.isTokenExpired(localStorage.getItem(TOKEN_NAME))) {

      this.router.navigate(['login'], {queryParams: {redirectTo: state.url}});
      return false;
    } else {

      return true;

    }
  }
}
