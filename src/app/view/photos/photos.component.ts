import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/shared/services/json-placeholder.service';
import { Photos } from '../photos';

@Component({
  selector: 'alb-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: Array<Photos> = [];
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.retrieveAllPhotos();
  }

  retrieveAllPhotos() {
    this.jsonPlaceholderService.getAllPhotos().subscribe((values) => {
      if (values) this.photos = values;
    });
  }
}
