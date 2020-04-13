import { INavItems, INavItem } from './../../models/navigation.model';
import { NavigationService } from '@app/features/navigation/service/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navItems: INavItem[];
  isCollapsed = true;

  constructor(private navigationService: NavigationService) { 
    this.navItems = navigationService.navigationItems;
  }

  ngOnInit(): void {

  }

  redirectTo(item: INavItem) {
  }

  // Private methods
  private subscribe() {
  }
}
