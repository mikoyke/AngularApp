import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-row-one',
  templateUrl: './row-one.component.html',
  styleUrl: './row-one.component.scss',
})
export class RowOneComponent {
  constructor(private router: Router) {}
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
