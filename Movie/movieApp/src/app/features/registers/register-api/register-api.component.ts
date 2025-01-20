import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RegistrationService } from '../../../core/services/registeration.service';

@Component({
  selector: 'app-register-api',
  templateUrl: './register-api.component.html',
  styleUrl: './register-api.component.scss',
  standalone: false,
})
export class RegisterApiComponent {
  registerApiForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.registerApiForm = this.fb.group({
      username: ['', [Validators.required]],
      Api_Key: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.registerApiForm.valid) {
      this.registrationService.setStepData('step2', this.registerApiForm.value);
      this.router.navigate(['/register/plans']);
    }
  }
}
