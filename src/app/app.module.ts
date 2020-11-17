import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/components/card/card.component';
import { AlbunsComponent } from './view/albuns/albuns.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './view/posts/posts.component';
import { PhotosComponent } from './view/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AlbunsComponent,
    DashboardComponent,
    PostsComponent,
    PhotosComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    RouterModule, 
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
