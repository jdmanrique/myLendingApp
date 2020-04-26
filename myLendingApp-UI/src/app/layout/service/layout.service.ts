import { INavItem } from './../models/navigation.model';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { sideNavItems } from '../data/navigation.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

  sideBarToggled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get navigationItems() {
    return sideNavItems;
  }

  constructor(private route: ActivatedRoute, private router: Router) { 
  }

  redirectTo(item: INavItem) {
    if (item.link)
    {
      this.router.navigateByUrl(item.link);
    }
  }  

  toggleSideBar(toggle: boolean) {
    this.sideBarToggled.next(toggle);
  }
}

