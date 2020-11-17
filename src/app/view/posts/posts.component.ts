import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/shared/services/json-placeholder.service';
import { Posts } from '../posts';

@Component({
  selector: 'alb-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Array<Posts> = [];
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.retrieveAllPosts();
  }
  retrieveAllPosts() {
    this.jsonPlaceholderService.getAllPosts().subscribe((values) => {
      if (values) this.posts = values;
    });
  }
}
