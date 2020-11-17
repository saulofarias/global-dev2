import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import {Album} from 'src/app/view/albuns/album';
import {Posts} from 'src/app/view/posts';
import {Photos} from 'src/app/view/photos';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  uri = environment.URL;
  constructor(private httpClient: HttpClient) {}

  getAllAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.uri}/albums`);
  }

  getAllPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(`${this.uri}/Posts`);
  }

  getAllPhotos(): Observable<Photos[]> {
    return this.httpClient.get<Photos[]>(`${this.uri}/Photos`);
  }
}
