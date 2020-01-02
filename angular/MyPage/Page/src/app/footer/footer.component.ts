import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebook_icon:any = "./assets/img/facebook-new.png";
  insta_icon:any = "./assets/img/instagram-new.png";
  github_icon:any = "./assets/img/github.png";
  linkin_icon:any = "./assets/img/linkin.png";

  facebook_link = "https://www.facebook.com/search/top/?q=images%20from%20a%20memory&epa=SEARCH_BOX";
  constructor() { }

  ngOnInit() {
  }

}
