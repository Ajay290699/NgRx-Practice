import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BucketComponent, GroceryComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
