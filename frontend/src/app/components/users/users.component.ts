import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService],
})
export class UsersComponent implements OnInit {
  userList: User[];
  page: number;
  per_page: number;
  total: number;

  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit() {
    return this._userService
      .getUserList()
      .subscribe((data) => this.setData(data));
  }

  pageChanged(event) {
    return this._userService
      .getUserList(event)
      .subscribe((data) => this.setData(data));
  }

  userDetail(id: number) {
    this.router.navigate(['user', id]);
  }

  setData(data) {
    this.userList = data['data'];
    this.page = data['page'];
    this.per_page = data['per_page'];
    this.total = data['total'];
  }
}
