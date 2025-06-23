import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../../../models/user.model';
import { addUser, updateUser } from '../../store/actions/user.action';
import { firstValueFrom } from 'rxjs';
import { selectAllUsers } from '../../store/selectors/user.selector';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit {

  form!: FormGroup;
  editingUserId: number | null = null;

  constructor(private fb: FormBuilder, private store: Store, private userService: UserService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.userService.currentUser$.subscribe(user => {
      if (user) {
        this.editingUserId = user.id;
        this.form.patchValue({
          name: user.name,
          email: user.email,
        });
      } else {
        this.editingUserId = null;
        this.form.reset();
      }
    });
  }

  onSubmit() {
    // if (this.form.valid) {
    //   const id = this.generateUniqueId(this.store);

    //   const newUser: User = {
    //     id,
    //     ...this.form.value
    //   };

    //   this.store.dispatch(addUser({ payload: newUser }));
    //   this.form.reset();
    // }
    if (this.form.valid) {
      const formValue = this.form.value;
      if (this.editingUserId !== null) {
        // update existing user
        this.store.dispatch(updateUser({ payload: { id: this.editingUserId, ...formValue } }));
      } else {
        // add new user
        const id = this.generateUniqueId(); // or your ID generator
        this.store.dispatch(addUser({ payload: { id, ...formValue } }));
      }
      this.form.reset();
      this.editingUserId = null;
      this.userService.setCurrentUser(null);
    }
  }

  generateUniqueId() {
    return Math.floor(Math.random() * 900) + 1;
  }


}