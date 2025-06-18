import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {

  form!: FormGroup;
  users: any;

  constructor(private fb: FormBuilder) {
    this.users = [
      { id: 1, name: 'Ajay Chavan' },
      { id: 2, name: 'Dhruvil' },
      { id: 3, name: 'Kajal' }
    ];
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      user: ['', Validators.required]
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
