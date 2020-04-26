import { LayoutService } from './../../service/layout.service';
import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  @ViewChild('titleBarContainer') titleBarContainer: ElementRef;
  @ViewChild('titleBarMenuContainer') titleBarMenuContainer: ElementRef;

  sideBarToggled: boolean;
  constructor(private layoutService: LayoutService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleSideBar(value: boolean) {
    this.sideBarToggled = value;
    this.layoutService.toggleSideBar(value);
    this.applyClass(value);
  }

  private applyClass(value: boolean) {
    if (value) {
      this.renderer.addClass(this.titleBarContainer.nativeElement, 'toggled');
      this.renderer.addClass(this.titleBarMenuContainer.nativeElement, 'toggled');
    }
    else {
      this.renderer.removeClass(this.titleBarContainer.nativeElement, 'toggled');
      this.renderer.removeClass(this.titleBarMenuContainer.nativeElement, 'toggled');
    }
  }
}

