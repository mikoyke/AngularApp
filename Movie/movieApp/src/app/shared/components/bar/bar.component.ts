import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss',
  standalone: false,
})
export class BarComponent {
  isLoggedIn = false;
  userName: string | null = null;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });
    this.authService.currentUser.subscribe((name) => {
      this.userName = name;
    });
  }
  navigateToSignIn() {
    this.router.navigate(['/signIn']);
  }
  navigateToHome() {
    this.router.navigate(['']);
  }
  signOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  toMovieList() {
    this.router.navigate(['/movie-list']);
  }
}
