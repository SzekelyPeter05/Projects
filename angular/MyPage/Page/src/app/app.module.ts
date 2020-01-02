import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { MatToolbarModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { MainNewsItemComponent } from './main-news-item/main-news-item.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ConcertsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MainSlideComponent,
    MainNewsComponent,
    MainNewsItemComponent,
    MembersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MDBBootstrapModule.forRoot(),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
