import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { DashboardService } from '../service/dashboard.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService] 
})
export class DashboardComponent implements OnInit {
  constructor(public dashboardService: DashboardService) { 
    
  }


  ngOnInit(): void {
  }

}
