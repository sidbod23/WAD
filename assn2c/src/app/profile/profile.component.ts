import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>User Profile</h2>
    <div *ngIf="user">
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Phone Number:</strong> {{ user.phoneNumber }}</p>
    </div>
    <div *ngIf="!user">
      <p>No user logged in.</p>
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  ngOnInit() {
    if (typeof localStorage !== 'undefined') { // Check if localStorage is available
      this.user = JSON.parse(localStorage.getItem('loggedInUser') || 'null'); // Fetch logged-in user
    }
  }
}
