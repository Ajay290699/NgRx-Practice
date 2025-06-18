import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  users = [
    { name: 'Ajay Chavan', email: 'ajay@example.com' },
    { name: 'John Doe', email: 'john@example.com' }
  ];

  onEdit(user: any) {
    console.log('Edit user:', user);
  }

  onDelete(user: any) {
    console.log('Delete user:', user);
  }

}
