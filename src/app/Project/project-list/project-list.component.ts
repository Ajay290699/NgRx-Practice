import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../models/project.model';
import { Store } from '@ngrx/store';
import { selectAllProjects } from '../../store/selectors/project.selector';
import { removeProject } from '../../store/actions/project.action';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {

  projects$: Observable<Project[]>;

  constructor(private store: Store, private projectService: ProjectService) {
    this.projects$ = this.store.select(selectAllProjects);
  }

  onEdit(project: Project) {
    this.projectService.setCurrentProject(project);
  }

  onDelete(project: Project) {
    this.store.dispatch(removeProject({ payload: project }));
  }

}
