import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-row-one',
  templateUrl: './row-one.component.html',
  styleUrl: './row-one.component.scss',
  standalone: false,
})
export class RowOneComponent {
  emailForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;
      this.router.navigate(['/register'], { queryParams: { email } });
    }
  }
}
