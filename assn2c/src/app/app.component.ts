import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wadl_assn_2c';

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}