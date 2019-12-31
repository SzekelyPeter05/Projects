import { Injectable } from '@angular/core';
import { postType } from './post_type';


@Injectable({
  providedIn: 'root',
})
export class DataSource {
  constructor() { }
  Concerts: postType[] = [ { title:"Helyszín", description:"ashdahskdhaksdhyxcyxcyccyxcyxcycxycxy", pictureSrc:"../assets/img/metal_1.jpg" },
                           { title:"Helyszín", description:"qweqiweqweuoqiwueyxcyxcyxcyxc", pictureSrc:"../assets/img/metal_2.png" },
                           { title:"Helyszín", description:"yxcyxcycyxcyxcyxcyxcyxcyxc", pictureSrc:"../assets/img/metal_2.png" }   ];
  

  getConcerts()
  {
      return [...this.Concerts];
  }
  
  



}