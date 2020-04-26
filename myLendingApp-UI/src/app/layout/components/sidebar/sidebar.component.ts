import { LayoutService } from './../../service/layout.service';

import { INavItems, INavItem } from './../../models/navigation.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navItems: INavItem[];
  isCollapsed = true;
  sideBarToggled: boolean;
  subscriptions: Subscription = new Subscription();

  constructor(private layoutService: LayoutService) { 
    this.navItems = layoutService.navigationItems;
  }

  ngOnInit(): void {

    this.subscriptions.add(
      this.layoutService.sideBarToggled.subscribe((value) => {
        this.sideBarToggled = value;
      })
    );
  }

  redirectTo(item: INavItem) {
    this.layoutService.redirectTo(item);
  }

  toggleSideBar(value: boolean) {
    this.layoutService.toggleSideBar(value);
  }

  // Private methods
  private subscribe() {
  }
}
