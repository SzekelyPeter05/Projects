import { Component, OnInit } from '@angular/core';
import { DataSource } from '../DataSource/DataSource';
import { postType } from '../DataSource/post_type';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  Concerts: postType[] = this.DataSource.getConcerts();

 
  constructor(  private DataSource: DataSource ) { }

  ngOnInit() {
  }

}
