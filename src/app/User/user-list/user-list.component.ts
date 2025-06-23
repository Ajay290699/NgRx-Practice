import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../store/selectors/user.selector';
import { removeUser } from '../../store/actions/user.action';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private store: Store, private userService: UserService) {
    this.users$ = this.store.select(selectAllUsers);
  }

  ngOnInit() { }

  onEdit(user: any) {
    this.userService.setCurrentUser(user);
  }

  onDelete(user: any) {
    this.store.dispatch(removeUser({ payload: user }));
  }

}
