import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  users = [
    { id: 1, name: 'Ajay Chavan' },
    { id: 2, name: 'Pooja Shah' },
    { id: 3, name: 'Rahul Mehta' }
  ];

  projects = [
    { id: 101, name: 'CRM System' },
    { id: 102, name: 'ERP Tool' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      project: ['', Validators.required],
      user: ['', Validators.required],
      priority: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    } else {
      console.log('error : invalid form details');
    }
  }

}
