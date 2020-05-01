import { LayoutService } from './../../service/layout.service';
import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  sideBarToggled: boolean;
  constructor(private layoutService: LayoutService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.toggleSideBar(true);
  }

  toggleSideBar(value: boolean) {
    this.sideBarToggled = value;
    this.layoutService.toggleSideBar(value);
  }
}


