import { LayoutService } from './../../service/layout.service';

import { INavItems, INavItem } from './../../models/navigation.model';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navItems: INavItem[];
  isCollapsed = true;
  subscriptions: Subscription = new Subscription();
  sideBarToggled: boolean;

  constructor(private layoutService: LayoutService, private route: Router) { 
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

  // Private methods
}
