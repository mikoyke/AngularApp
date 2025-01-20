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
      this.registrationService.setStepData('step3', {
        role: this.selectedPlan,
      });

      const registrationData = this.registrationService.getRegistrationData();
      console.log('Final Registration Data:', registrationData);

      this.authService.signup(registrationData).subscribe((response) => {
        this.router.navigate(['/movie-list']);
      });
    } else {
      alert('Please select a plan to continue.');
    }
  }
}
