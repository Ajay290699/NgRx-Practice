import { Component } from '@angular/core';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjectListComponent } from '../project-list/project-list.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [AddProjectComponent, ProjectListComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
