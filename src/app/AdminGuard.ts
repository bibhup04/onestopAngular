import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is authenticated
    if (!this.authService.isAuthenticated()) {
      // If not authenticated, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }

    // Check if the user is an admin
    if (!this.authService.isUserAdmin()) {
      // If not an admin, redirect to an unauthorized page
      this.router.navigate(['/unauthorized']);
      return false;
    }

    // If authenticated and an admin, allow access to the route
    return true;
  }
}
