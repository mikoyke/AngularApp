import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { map } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.currentRole.pipe(
    map((role) => {
      if (role === 'SUPERUSER' || role === 'ADMIN') {
        return true;
      } else {
        router.navigate(['/upgrade-plan']);
        return false;
      }
    })
  );
};
