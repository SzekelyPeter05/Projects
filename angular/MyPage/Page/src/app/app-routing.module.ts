import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {path: 'about_us' , component: AboutUsComponent},
    { path: 'concerts', component: ConcertsComponent },
    { path: '', component: MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
