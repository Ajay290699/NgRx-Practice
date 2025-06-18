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
    { id: 1, name: 'Ajay Chavan' },
    { id: 2, name: 'Pooja Shah' },
    { id: 3, name: 'Rahul Mehta' }
  ];

  projects = [
    { name: 'CRM System', description: 'Manage customers', user: { id: 1, name: 'Ajay Chavan' } },
    { name: 'ERP Tool', description: 'Handle inventory', user: { id: 2, name: 'Rahul Mehta' } }
  ];

  onEdit(user: any) {
    console.log('Edit user:', user);
  }

  onDelete(user: any) {
    console.log('Delete user:', user);
  }

}
