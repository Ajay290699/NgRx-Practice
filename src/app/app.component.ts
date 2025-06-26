import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { Store } from '@ngrx/store';
import { loadUsers } from './store/actions/user.action';
import { loadProjects } from './store/actions/project.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BucketComponent, GroceryComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadProjects());
  }

}
