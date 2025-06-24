import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { Project } from '../../../models/project.model';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../store/selectors/user.selector';
import { selectAllProjects } from '../../store/selectors/project.selector';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  form!: FormGroup;
  isEditMode: boolean = false;

  users$!: Observable<User[]>;
  projects$!: Observable<Project[]>;
  users = [
    { id: 1, name: 'Ajay Chavan' },
    { id: 2, name: 'Pooja Shah' },
    { id: 3, name: 'Rahul Mehta' }
  ];

  projects = [
    { id: 101, name: 'CRM System' },
    { id: 102, name: 'ERP Tool' }
  ];

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      project: [[], Validators.required],
      user: [[], Validators.required],
      priority: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.users$ = this.store.select(selectAllUsers);
    this.projects$ = this.store.select(selectAllProjects);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    } else {
      console.log('error : invalid form details');
    }
  }

}
