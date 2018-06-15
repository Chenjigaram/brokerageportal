import { ROLE_NAMES } from '../services/auth.constant';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName: string;
  password: string;

  model: any = {};
  loading = false;
  error = '';
  redirectUrl: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
    this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];

  }

  ngOnInit(): void {
    this.userService.logout();
  }

  login() {
    this.loading = true;

    this.authenticationService.login(this.userName, this.password)
      .subscribe(
        result => {
          this.loading = false;

          if (result) {
            this.userService.login(result, this.userName);


            setTimeout(() => { this.navigateAfterSuccess(); }, 2000);

          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

  private navigateAfterSuccess() {

    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {

      this.router.navigate(['/home']);
    }
  }

}
