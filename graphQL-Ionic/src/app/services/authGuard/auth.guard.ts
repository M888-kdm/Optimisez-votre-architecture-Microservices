import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../authService/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLoggedIn()) {

      this.router.navigate(['/login']); // go to login if not authenticated

      return false;

    }
    return true;

  }
  
}
