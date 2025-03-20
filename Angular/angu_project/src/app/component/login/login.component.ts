import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser.email === this.credentials.email && 
        storedUser.password === this.credentials.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}