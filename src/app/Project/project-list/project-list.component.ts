import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {

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
