import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.loginError = null;
    if (this.loginForm.invalid) return;

    this.loading = true;
    const { email, password } = this.loginForm.value;

    this.api.login(email, password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['chatbot/chat']);
      },
      error: (err) => {
        this.loading = false;
        this.loginError = err.error.detail || 'Login failed. Please try again.';
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['chatbot/register']);
  }

  showWarning = true;
  acceptWarning(): void {
    this.showWarning = false;
  }

  goToNextStep(): void {
    this.router.navigate(['/chatbot/register']);
  }

}
