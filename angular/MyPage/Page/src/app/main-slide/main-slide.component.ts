import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slide',
  templateUrl: './main-slide.component.html',
  styleUrls: ['./main-slide.component.css']
})
export class MainSlideComponent implements OnInit {

  imageSrc="../../assets/img/196.jpg";
  imageSrc2="../../assets/img/team.jpg";
  imageSrc3="../../assets/img/main.jpg";
  constructor() { }

  ngOnInit() {
  }

}
