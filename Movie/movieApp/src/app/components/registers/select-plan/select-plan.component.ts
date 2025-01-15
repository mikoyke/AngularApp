import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-select-plan',
    templateUrl: './select-plan.component.html',
    styleUrl: './select-plan.component.scss',
    standalone: false
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

  constructor(private router: Router) {}

  selectPlan(plan: any): void {
    this.selectedPlan = plan;
  }

  onNext(): void {
    if (this.selectedPlan) {
      console.log('Selected Plan:', this.selectedPlan);
    } else {
      alert('Please select a plan to continue.');
    }
  }
}
