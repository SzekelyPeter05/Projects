import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageSrc :string[]=['../assets/img/icon.png', '../assets/img/jologojavitott_2.jpg'];
  imageSrcSmall = false;
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.setPageIcon();
  }

  setPageIcon(){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.imageSrcSmall = true;
      }
      if (state.breakpoints[Breakpoints.Small]) {
        this.imageSrcSmall = true;
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        this.imageSrcSmall = true;
      }
      if (state.breakpoints[Breakpoints.Large]) {
       
        this.imageSrcSmall = false;
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.imageSrcSmall = false;
        
      }
    });
  }

}
