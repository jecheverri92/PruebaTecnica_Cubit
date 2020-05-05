import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService],
})
export class UserDetailComponent implements OnInit {
  userSelected: User;
  id: number;
  constructor(
    private _userService: UserService,
    private router: Router,
    private activatedRouted: ActivatedRoute
  ) {
    this.activatedRouted.params.subscribe((params) => {
      this._userService
        .getUser(params['id'])
        .subscribe((data) => (this.userSelected = data['data']));
    });
  }

  ngOnInit() {}
  goBack() {
    this.router.navigate(['/']);
  }
}
