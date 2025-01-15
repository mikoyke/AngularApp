import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrl: './bar.component.scss',
    standalone: false
})
export class BarComponent {
  constructor(private router: Router) {}

  navigateToSignIn() {
    this.router.navigate(['/signIn']);
  }
  navigateToHome() {
    this.router.navigate(['']);
  }
}
