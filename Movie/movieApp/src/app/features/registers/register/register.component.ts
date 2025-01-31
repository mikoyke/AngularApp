import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: false,
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private Activerouter: ActivatedRoute,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.Activerouter.queryParams.subscribe((params) => {
      const email = params['email'] || null;
      if (email) {
        this.registerForm.patchValue({ email });
      }
    });
  }
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.setRegistrationData('step1', this.registerForm.value);
      this.router.navigate(['register/registerApi']);
    }
  }
}
