import { Injectable } from '@angular/core';
import { postType } from './post_type';

@Injectable({
  providedIn: 'root',
})
export class DataSource {
  constructor() { }
  Concerts: postType[] = [ { title:"Teszt", description:"teszt", pictureSrc:"../assets/img/metal_1.jpg" },
                           { title:"Teszt", description:"teszt", pictureSrc:"../assets/img/metal_2.png" },
                           { title:"Teszt", description:"teszt", pictureSrc:"../assets/img/metal_2.png" }   ];

  getConcerts()
  {
      return [...this.Concerts];
  }
  



}