import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot-redirect',
  template: ''
})
export class ChatbotRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/chatbot/chat']);
    } else {
      this.router.navigate(['/chatbot/login']);
    }
  }
}
