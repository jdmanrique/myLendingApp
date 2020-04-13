import { Injectable, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { sideNavItems } from '../data/navigation.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

  constructor(private route: ActivatedRoute, private router: Router) { 
    

  }

  get navigationItems() {
    return sideNavItems;
  }
}
