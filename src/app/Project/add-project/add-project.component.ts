import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { Project } from '../../../models/project.model';
import { selectAllUsers } from '../../store/selectors/user.selector';
import { Store } from '@ngrx/store';
import { addProject, updateProject } from '../../store/actions/project.action';
import { ProjectService } from '../project.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgSelectModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {

  form!: FormGroup;
  editingProjectId: number | null = null;

  users$: Observable<User[]>;

  constructor(private fb: FormBuilder, private store: Store, private projectService: ProjectService) {
    this.users$ = this.store.select(selectAllUsers);
  }


  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      user: [[], Validators.required]
    });

    this.projectService.currentProject$.subscribe(project => {
      if (project) {
        this.editingProjectId = project.id;
        this.form.patchValue({
          name: project.name,
          description: project.description,
          user: project.users.map(u => u.id)
        });
      } else {
        this.editingProjectId = null;
        this.form.reset();
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { name, description, user } = this.form.value;

      this.users$.subscribe(users => {
        const selectedUser: User[] = users.filter(u => user.includes(u.id));

        if (!selectedUser.length) {
          console.error('Selected user not found in store');
          return;
        }

        const project: Project = {
          id: this.editingProjectId ?? this.generateUniqueId(),
          name,
          description,
          users: selectedUser
        };

        if (this.editingProjectId !== null) {
          this.store.dispatch(updateProject({ payload: project }));
        } else {
          this.store.dispatch(addProject({ payload: project }));
        }

        this.form.reset();
        this.editingProjectId = null;
        this.projectService.setCurrentProject(null);
      });
    }
  }

  generateUniqueId(): number {
    return Math.floor(Math.random() * 999) + 1;
  }

}
