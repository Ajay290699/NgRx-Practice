import { Component } from '@angular/core';
import { UserAddComponent } from '../user-add/user-add.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserAddComponent, UserListComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
