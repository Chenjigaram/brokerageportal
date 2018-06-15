
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home = 'Home';
  userName: string;
  constructor(private userService: UserService) {


  this.userName = this.userService.username.toUpperCase();
   }

  ngOnInit() {


  }

}
