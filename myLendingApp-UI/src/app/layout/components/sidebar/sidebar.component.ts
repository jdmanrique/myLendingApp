import { LayoutService } from './../../service/layout.service';

import { INavItems, INavItem } from './../../models/navigation.model';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sideBarMenuContainer') sideBarMenuContainer: ElementRef;
  @ViewChild('sideBarNavContainer') sideBarNavContainer: ElementRef;

  navItems: INavItem[];
  isCollapsed = true;
  sideBarToggled: boolean;
  subscriptions: Subscription = new Subscription();

  constructor(private layoutService: LayoutService, private renderer: Renderer2) { 
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
    this.applyClass(value);
  }

  // Private methods
  private subscribe() {
  }

  private applyClass(value: boolean) {
    if (value) {
      this.renderer.addClass(this.sideBarMenuContainer.nativeElement, 'toggled');
      this.renderer.addClass(this.sideBarNavContainer.nativeElement, 'toggled');
    }
    else {
      this.renderer.removeClass(this.sideBarMenuContainer.nativeElement, 'toggled');
      this.renderer.removeClass(this.sideBarNavContainer.nativeElement, 'toggled');
    }
  }
}
