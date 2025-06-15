import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  registerError: string | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.registerError = null;
    if (this.registerForm.invalid) return;

    this.loading = true;
    const { email, password } = this.registerForm.value;

    this.api.register(email, password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['chatbot/chat']);
      },
      error: (err) => {
        this.loading = false;
        this.registerError = err.error.detail || 'No se pudo crear la cuenta.';
      }
    });
  }

  goToNextStep(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/chatbot/chat']);
    } else {
      alert('You need to create an account or log in before continuing to the next step.');
      this.router.navigate(['/chatbot/login']);
    }
  }

}
