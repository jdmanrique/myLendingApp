import { LayoutService } from './../../service/layout.service';

import { INavItems, INavItem } from './../../models/navigation.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navItems: INavItem[];
  isCollapsed = true;

  constructor(private layoutService: LayoutService) { 
    this.navItems = layoutService.navigationItems;
  }

  ngOnInit(): void {

  }

  redirectTo(item: INavItem) {
    this.layoutService.redirectTo(item);
  }

  // Private methods
  private subscribe() {
  }
}
