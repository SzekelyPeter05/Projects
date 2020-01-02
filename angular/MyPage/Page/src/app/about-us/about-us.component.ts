import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutPicture_1:string[] = ["../assets/img/196.jpg", "../assets/img/196_medium.jpg",  "../assets/img/196_small.jpg"];
  aboutPicture_1_need:boolean[] = [true,false,false];
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.aboutPicture_1_need = [false,false,true];;
      }
      if (state.breakpoints[Breakpoints.Small]) {
        this.aboutPicture_1_need = [false,false,true];;
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        this.aboutPicture_1_need = [false,true,false];;
      }
      if (state.breakpoints[Breakpoints.Large]) {
        this.aboutPicture_1_need = [true,false,false];;
      
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.aboutPicture_1_need = [true,false,false];;
        
      }
    });
  }

}
