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
    if (this.loginForm.valid) {
      const appUser = this.loginForm.value;
      this.authService.login(appUser).subscribe(
        (response) => {
          console.log('Logged in successfully', response);
        },
        (error) => {
          console.error('Error during login', error);
        }
      );
    }
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
