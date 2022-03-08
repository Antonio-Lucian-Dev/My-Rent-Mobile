import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interface/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-vehicle-rent',
  templateUrl: './vehicle-rent.component.html',
  styleUrls: ['./vehicle-rent.component.scss']
})
export class VehicleRentComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.findAllPosts().subscribe(posts => this.posts = posts);
  }

}
