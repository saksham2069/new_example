import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsersService } from '../services/users.service';





@Injectable({
  providedIn: 'root'
})
export class logoutAuthGuard implements CanActivate {
  constructor(private authService: UsersService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (!this.authService.isuserloggedin()) {
      return true;
    } else {
      this.router.navigate(['/main'])
      return false;
    }
  }
}