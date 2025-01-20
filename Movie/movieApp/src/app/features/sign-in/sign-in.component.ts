import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: false,
})
export class SignInComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.authService.signIn(credentials).subscribe({
      next: (response) => {
        console.log('Sign-in successful:', response);

        this.router.navigate(['/movie-list']);
      },
      error: (error) => {
        console.error('Sign-in error:', error);
        alert('Invalid username or password');
      },
    });
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
