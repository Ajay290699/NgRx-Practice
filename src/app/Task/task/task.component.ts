import { Component } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [AddTaskComponent, TaskListComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

}
