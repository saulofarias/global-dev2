import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AVANADE';
  subtitle = 'Aceleração Global Dev #2';

  constructor(private router: Router) {}

  toAlbums() {
    this.title = 'Albums'
    this.router.navigate(['albums']);
  }

  toPosts() {
    this.title = 'Posts'
    this.router.navigate(['posts']);
  }

  toPhotos() {
    this.title = 'Photos'
    this.router.navigate(['photos']);
  }
}
