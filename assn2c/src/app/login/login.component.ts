import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <input [(ngModel)]="username" placeholder="Username" name="username" required />
      <input [(ngModel)]="password" type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
    </form>
    <p *ngIf="loginFailed">Login failed. Please try again.</p>
  `,
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]'); 
    console.log('Stored Users:', users);
    console.log('Input Username:', this.username);
    console.log('Input Password:', this.password);
    const foundUser = users.find((user: any) => user.username === this.username && user.password === this.password);
    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser)); 
      this.router.navigate(['/profile']);
    } else {
      this.loginFailed = true;
    }
  }
  
} 