import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog: Entry<any>;

  constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.blogService.getBlog(params['slug'])
        .then(blog => {
          this.blog = blog[0];
        })
      }
    );
  }
}
