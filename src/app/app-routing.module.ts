import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsComponent } from './view/albuns/albuns.component';
import {PhotosComponent} from './view/photos/photos.component';
import {PostsComponent} from './view/posts/posts.component';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbunsComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
