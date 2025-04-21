import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="register()">
      <input [(ngModel)]="user.username" placeholder="Username" name="username" required />
      <input [(ngModel)]="user.password" type="password" placeholder="Password" name="password" required />
      <input [(ngModel)]="user.name" placeholder="Name" name="name" required />
      <input [(ngModel)]="user.phoneNumber" placeholder="Phone Number" name="phoneNumber" required />
      <button type="submit">Register</button>
    </form>
  `,
})
export class RegisterComponent {
  user: User = { username: '', password: '', name: '', phoneNumber: '' };

  constructor(private userService: UserService, private router: Router) {}

  register(): void {
    this.userService.register(this.user);
    let users: any[] = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.user);
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/login']);
  }
  
  
} 