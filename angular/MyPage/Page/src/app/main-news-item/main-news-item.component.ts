import { Component, OnInit } from '@angular/core';
import { DataSourceNews } from '../DataSource/DataSource-News';
import { newsType} from '../DataSource/news_type';

@Component({
  selector: 'app-main-news-item',
  templateUrl: './main-news-item.component.html',
  styleUrls: ['./main-news-item.component.css']
})
export class MainNewsItemComponent implements OnInit {

  newsList:newsType[] = this.DataSourceNews.getNews();
  constructor(private DataSourceNews: DataSourceNews) { }

  ngOnInit() {
  }

}
