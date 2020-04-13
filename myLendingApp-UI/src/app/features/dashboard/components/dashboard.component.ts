import { NavigationService } from '@app/features/navigation/service/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private navigationService: NavigationService) { 

  }

  ngOnInit(): void {
  }

}
