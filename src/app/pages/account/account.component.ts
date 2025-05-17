import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
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
    // Lógica API para actualizar email (cuando esté disponible en el backend)
    this.updateMessage = `Correo actualizado a: ${newEmail}`;
  }

  updatePassword(): void {
    const { newPassword } = this.passwordForm.value;
    // Lógica API para actualizar contraseña (cuando esté disponible en el backend)
    this.updateMessage = 'Contraseña actualizada correctamente.';
  }

  deleteAccount(): void {
    const confirmed = confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción es irreversible.');
    if (!confirmed) return;

    // Lógica API para eliminar cuenta (cuando esté implementada)
    this.updateMessage = 'Cuenta eliminada.';
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
