import { Component } from '@angular/core';
import { Post } from './posts/post.model';
import { loginService } from './login/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts : Post[] = [];


  onAddComponent(post)
  {
    this.storedPosts.push(post);
  }
}
