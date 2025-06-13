import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RRT Portfolio Webpage';

  constructor(private router: Router) {}

  goHome(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/chat']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
