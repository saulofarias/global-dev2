import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/shared/services/json-placeholder.service';
import { Album } from './album';

@Component({
  selector: 'alb-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css'],
})
export class AlbunsComponent implements OnInit {
  albums: Array<Album> = [];
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.retrieveAllAlbuns();
  }

  retrieveAllAlbuns() {
    this.jsonPlaceholderService.getAllAlbums().subscribe((albums) => {
      console.log(albums);
      if (albums) this.albums = albums;
    });
  }
}
