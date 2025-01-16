import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserEntity, Users } from '../../services/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users!: UserEntity[];
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((res: Users) => {
      this.users = res.data;
    });
  }
}
