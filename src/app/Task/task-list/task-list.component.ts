import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks = [
    {
      title: 'Fix Login Bug',
      description: 'Resolve issue with user login',
      project: 'CRM System',
      dueDate: '2025-06-30',
      priority: 'High',
      status: 'Pending'
    },
    {
      title: 'Design Dashboard UI',
      description: 'Create a responsive dashboard layout',
      project: 'ERP Tool',
      dueDate: '2025-07-05',
      priority: 'Medium',
      status: 'In Progress'
    }
  ];


  onEdit(user: any) {
    console.log('Edit user:', user);
  }

  onDelete(user: any) {
    console.log('Delete user:', user);
  }

}
