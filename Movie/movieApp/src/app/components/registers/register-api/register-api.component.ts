import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-api',
  templateUrl: './register-api.component.html',
  styleUrl: './register-api.component.scss',
})
export class RegisterApiComponent {
  registerApiForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerApiForm = this.fb.group({
      username: ['', [Validators.required]],
      Api_Key: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.registerApiForm.valid) {
      console.log('Register Form:', this.registerApiForm.value);
      this.router.navigate(['/register/plans']);
    }
  }
}
