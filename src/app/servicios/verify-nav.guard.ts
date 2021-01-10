import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyNavGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  canActivate(): boolean{
    if (this.storageService.islogged()) {
      return true;
    }
    this.router.navigate(['/iniciarsesion']);
    return false;
  } 
  
}
