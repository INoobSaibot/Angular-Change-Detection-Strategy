import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user: User = {
      firstName: 'Alice',
      lastName: 'Smith'
  };

  userList: any[]=[];

  constructor() {

  }

  // this works when child component does not have
  // ChangeDetectionStrategy.OnPush
  changeUserName() {
      this.user.firstName = 'Bob';
      
  }



}