import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  emailForm: FormGroup;
  passwordForm: FormGroup;

  updateMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.emailForm = this.fb.group({
      newEmail: ['', [Validators.required, Validators.email]]
    });

    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  updateEmail(): void {
    const { newEmail } = this.emailForm.value;
  
    this.api.updateEmail(newEmail).subscribe({
      next: () => {
        this.updateMessage = `Correo actualizado a: ${newEmail}`;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error('Error al actualizar correo:', err);
        this.updateMessage = null;
        this.errorMessage = err.error.detail || 'Error al actualizar el correo.';
      }
    });
  }
  
  updatePassword(): void {
    const { newPassword } = this.passwordForm.value;
  
    this.api.updatePassword(newPassword).subscribe({
      next: () => {
        this.updateMessage = 'Password updated successfully';
        this.errorMessage = null;
      },
      error: (err) => {
        console.error('Error updating password:', err);
        this.updateMessage = null;
        this.errorMessage = err.error.detail || 'Error al actualizar la contraseña.';
      }
    });
  }  

  deleteAccount(): void {
    const confirmed = confirm('Are you sure you want to delete your account? This action is irreversible.');
    if (!confirmed) return;
  
    this.api.deleteAccount().subscribe({
      next: () => {
        this.updateMessage = 'Account deleted successfully.';
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error deleting account:', err);
        this.errorMessage = err.error.detail || 'Error al eliminar la cuenta.';
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

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/chatbot/login']);
  }

}
