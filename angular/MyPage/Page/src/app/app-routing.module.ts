import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConcertsComponent } from './concerts/concerts.component';


const routes: Routes = [
    {path: 'about_us' , component: AboutUsComponent},
    { path: 'concerts', component: ConcertsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
