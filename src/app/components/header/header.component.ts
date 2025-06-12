import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goHome(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/chat']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  goToAccount(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}