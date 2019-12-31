import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  member_singer = "../assets/img/image_singer.jpg";
  member_gabor = "../assets/img/gabor_img.jpg";
  member_krisz = "../assets/img/image_krisz.jpg";
  member_larion = "../assets/img/image_larion.jpg";
  member_zsolt = "../assets/img/image_zsolt.jpg";
  constructor() { }

  ngOnInit() {
  }

}
