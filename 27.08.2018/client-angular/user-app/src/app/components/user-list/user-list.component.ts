import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../imports';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers((userList) => this.userList = userList);
  }
}
