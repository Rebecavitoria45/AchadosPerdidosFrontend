import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})


export class LoginGuard implements CanActivate{

    constructor(private loginService:LoginService, private router:Router)
    {

    }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const id = this.loginService.getId();

    //se nao exitir Id 
    if(id === null){
        this.router.navigate(['login'])
        return false;
    }

    return true;
    }
}