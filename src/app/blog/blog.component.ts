import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog.model';
import { Entry } from 'contentful';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  //blogs: Blog[];
  blogs: Entry<any>[] = [];

  constructor(private blogService: BlogService) { }

  // fetch data on init
  ngOnInit() {
    this.blogService.getBlogs()
    .then(blogs => {
      this.blogs = blogs;
      console.log('blogs', this.blogs)
    })
  }
}
