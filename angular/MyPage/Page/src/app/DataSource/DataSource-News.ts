import { Injectable } from '@angular/core';
import { newsType} from './news_type';

@Injectable({
  providedIn: 'root',
})
export class DataSourceNews{

    constructor(){}

    News:newsType[] = [
        { description: "Join us this Fall for an evening of 'The Ghost Note Symphonies' in Chicago, Denver and Los Angeles. Our good friends...", picSrc:"", pictureSrc:"../assets/img/metal_1.jpg", pictureSrcMedium:"../assets/img/metal_1_medium.jpg", pictureSrcSmall:"../assets/img/metal_1_small.jpg",title : "'The Ghost Note Symphonies' Live",date:"January 22nd 2019"  },
        { description: "Join us this Fall for an evening of 'The Ghost Note Symphonies' in Chicago, Denver and Los Angeles. Our good friends...", picSrc:"", pictureSrc:"../assets/img/metal_1.jpg",pictureSrcMedium:"../assets/img/metal_1_medium.jpg", pictureSrcSmall:"../assets/img/metal_1_small.jpg",title : "'The Ghost Note Symphonies' Live",date:"January 22nd 2019"  },
        { description: "Join us this Fall for an evening of 'The Ghost Note Symphonies' in Chicago, Denver and Los Angeles. Our good friends...", picSrc:"", pictureSrc:"../assets/img/metal_1.jpg",pictureSrcMedium:"../assets/img/metal_1_medium.jpg", pictureSrcSmall:"../assets/img/metal_1_small.jpg",title : "'The Ghost Note Symphonies' Live",date:"January 22nd 2019"  }
  ]
  getNews()
  {
    return [...this.News];
  }

}