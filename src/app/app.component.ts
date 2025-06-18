import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { UserComponent } from "./User/user/user.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BucketComponent, GroceryComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
