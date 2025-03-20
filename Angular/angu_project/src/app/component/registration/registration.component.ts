import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  register() {
    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(this.user));
    // Navigate to home page
    this.router.navigate(['/home']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}