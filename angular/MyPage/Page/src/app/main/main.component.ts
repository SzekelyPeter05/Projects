import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  imageSrc="../../assets/img/196.jpg";
  imageSrc2="../../assets/img/team.jpg";
  imageSrc3="../../assets/img/main.jpg";
  constructor() { }

  ngOnInit() {
  }

}
