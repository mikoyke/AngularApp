import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-upgrade-plan',
  standalone: false,

  templateUrl: './upgrade-plan.component.html',
  styleUrl: './upgrade-plan.component.scss',
})
export class UpgradePlanComponent {
  plans = [
    { name: 'Basic', role: 'USER' },
    { name: 'Standard', role: 'ADMIN' },
    { name: 'Premium', role: 'SUPERUSER' },
  ];
  selectedPlan: any = null;

  constructor(private router: Router, private authService: AuthService) {}

  selectPlan(plan: any): void {
    this.selectedPlan = plan;
  }

  onUpgrade(): void {
    if (this.selectedPlan) {
      this.authService.updateRole(this.selectedPlan.role).subscribe({
        next: () => {
          console.log('Role updated successfully');
          this.router.navigate(['/movie-list']);
        },
        error: (error) => {
          console.error('Error during role update:', error);
        },
      });
    } else {
      alert('Please select a plan to continue.');
    }
  }
}
