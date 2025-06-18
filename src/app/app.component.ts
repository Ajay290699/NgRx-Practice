import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { UserComponent } from "./User/user/user.component";
import { ProjectComponent } from "./Project/project/project.component";
import { TaskComponent } from "./Task/task/task.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BucketComponent, GroceryComponent, UserComponent, ProjectComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
