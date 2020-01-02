import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { MembersComponent } from './members/members.component';
import { MainComponent } from './main/main.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
    {path: 'about_us' , component: AboutUsComponent},
    { path: 'concerts', component: ConcertsComponent },
    { path: '', component: MainComponent},
    { path: 'members', component: MembersComponent },
    { path: 'music', component: MusicComponent }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
