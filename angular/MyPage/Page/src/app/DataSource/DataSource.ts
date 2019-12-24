import { Injectable } from '@angular/core';
import { postType } from './post_type';

@Injectable({
  providedIn: 'root',
})
export class DataSource {
  constructor() { }
  Concerts: postType[] = [ { title:"Teszt", description:"teszt", pictureSrc:"teszt" },
                           { title:"Teszt", description:"teszt", pictureSrc:"teszt" }   ];

  getConcerts()
  {
      return [...this.Concerts];
  }
  



}