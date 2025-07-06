import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuOpen = false;
  public isLoggedIn: boolean = false;

  constructor(private router: Router) {
    // Cierra el menú automáticamente al cambiar de ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false;
      }
      this.isLoggedIn = !!localStorage.getItem('token');
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goTo(route: string): void {
    this.router.navigate([route]);
    this.menuOpen = false;
  }

  goHome(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  goToAccount(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/chatbot/account']);
    } else {
      this.router.navigate(['/chatbot/login']);
    }
    this.menuOpen = false;
  }
}