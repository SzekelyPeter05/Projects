import { Component, OnInit } from '@angular/core';
import { DataSourceNews } from '../DataSource/DataSource-News';
import { newsType} from '../DataSource/news_type';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-news-item',
  templateUrl: './main-news-item.component.html',
  styleUrls: ['./main-news-item.component.css']
})
export class MainNewsItemComponent implements OnInit {

  newsList:newsType[] = this.DataSourceNews.getNews();
  constructor(private DataSourceNews: DataSourceNews,public breakpointObserver: BreakpointObserver) { }
  

  ngOnInit() {
    this.setImageSize();
  }
  setImageSize(){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        for(let index in this.newsList)
          { 
              this.newsList[index]['picSrc'] = this.newsList[index]['pictureSrcSmall'];  
          }
      }
      if (state.breakpoints[Breakpoints.Small]) {
        for(let index in this.newsList)
          { 
              this.newsList[index]['picSrc'] = this.newsList[index]['pictureSrcSmall'];  
          }
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        for(let index in this.newsList)
        { 
            this.newsList[index]['picSrc'] = this.newsList[index]['pictureSrcMedium'];  
        }
      }
      if (state.breakpoints[Breakpoints.Large]) {
        for(let index in this.newsList)
        { 
            this.newsList[index]['picSrc'] = this.newsList[index]['pictureSrc'];  
        }
      
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        for(let index in this.newsList)
        { 
            this.newsList[index]['picSrc'] = this.newsList[index]['pictureSrc'];  
        }
        
      }
    });

  }

}
