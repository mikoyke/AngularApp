import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../core/services/registeration.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.scss',
  standalone: false,
})
export class SelectPlanComponent {
  plans = [
    { name: 'Basic', price: '$8.99', quality: 'Good', resolution: '720p' },
    {
      name: 'Standard',
      price: '$13.99',
      quality: 'Better',
      resolution: '1080p',
    },
    { name: 'Premium', price: '$17.99', quality: 'Best', resolution: '4K+HDR' },
  ];
  selectedPlan: any = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private registrationService: RegistrationService
  ) {}

  selectPlan(plan: any): void {
    this.selectedPlan = plan;
  }

  onNext(): void {
    if (this.selectedPlan) {
      this.authService.setRegistrationData('step3', {
        plan: 'basic',
      });
      console.log(this.authService.getRegistrationData());
      this.authService.submitRegistration().subscribe({
        next: (response) => {
          console.log('Registration complete:', response);
          this.router.navigate(['/movie-list']);
        },
        error: (error) => {
          console.error('Error during final submission:', error);
        },
      });
    } else {
      alert('Please select a plan to continue.');
    }
  }
}
