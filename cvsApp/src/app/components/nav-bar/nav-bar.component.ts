import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  constructor(private router: Router) {}
  navigateToDirectory() {
    this.router.navigate(['/directory']);
  }
  navigateToHome() {
    this.router.navigate(['']);
  }
}
