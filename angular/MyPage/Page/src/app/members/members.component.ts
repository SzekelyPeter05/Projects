import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  member_singer:string[] = ["../assets/img/image_singer.jpg","../assets/img/image_singer_medium.jpg","../assets/img/image_singer_small.jpg" ];
  member_singer_need:boolean[] = [true,false,false];
  member_gabor:string[] = ["../assets/img/gabor_img.jpg","../assets/img/gabor_img_medium.jpg","../assets/img/gabor_img_small.jpg"];
  member_gabor_need:boolean[] = [true,false,false];
  member_krisz:string[] = ["../assets/img/image_krisz.jpg","../assets/img/image_krisz_medium.jpg","../assets/img/image_krisz_small.jpg"];
  member_krisz_need:boolean[] = [true,false,false];
  member_larion:string[] = ["../assets/img/image_larion.jpg","../assets/img/image_larion_medium.jpg","../assets/img/image_larion_small.jpg"];
  member_larion_need:boolean[] = [true,false,false];
  member_zsolt:string[] = ["../assets/img/image_zsolt.jpg","../assets/img/image_zsolt_medium.jpg","../assets/img/image_zsolt_small.jpg"];
  member_zsolt_need:boolean[] = [true,false,false];

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.setImages();
  }

  setImages(){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.member_singer_need = [false,false,true];
        this.member_gabor_need = [false,false,true];
        this.member_krisz_need = [false,false,true];
        this.member_larion_need = [false,false,true];
        this.member_zsolt_need = [false,false,true];
      }
      if (state.breakpoints[Breakpoints.Small]) {
        this.member_singer_need = [false,false,true];
        this.member_gabor_need = [false,false,true];
        this.member_krisz_need = [false,false,true];
        this.member_larion_need = [false,false,true];
        this.member_zsolt_need = [false,false,true];
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        this.member_singer_need = [false,true,false];
        this.member_gabor_need = [false,true,false];
        this.member_krisz_need = [false,true,false];
        this.member_larion_need = [false,true,false];
        this.member_zsolt_need = [false,true,false];
      }
      if (state.breakpoints[Breakpoints.Large]) {
        this.member_singer_need = [true,false,false];
        this.member_gabor_need = [true,false,false];
        this.member_krisz_need = [true,false,false];
        this.member_larion_need = [true,false,false];
        this.member_zsolt_need = [true,false,false];
      
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.member_singer_need = [true,false,false];
        this.member_gabor_need = [true,false,false];
        this.member_krisz_need = [true,false,false];
        this.member_larion_need = [true,false,false];
        this.member_zsolt_need = [true,false,false];
        
      }
    });
  }

}
