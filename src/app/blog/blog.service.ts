import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Blog } from './blog.model';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
const CONFIG = {
  space: 'xhhrpw8xz5oq',
  accessToken: '58bdb2c9cd5f11a949be8766a53970f03f5d92c3f3951a23fb4c754b246649f9',

  contentTypeIds: {
    author: '1kUEViTN4EmGiEaaeC6ouY',
    category: '5KMiN6YPvi42icqAUQMCQe',
    post: '2wKn6yEnZewu2SCCkus4as'
  }
}

@Injectable()
export class BlogService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor(private http: Http) { }

  getBlogs(): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.post
    }))
    .then(res => res.items);
  }

  getBlog(slug: string): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.post,
      'fields.slug': slug
    }))
    .then(res => res.items);
  }

}
