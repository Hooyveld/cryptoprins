import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Faq } from './faq.model';

@Injectable()
export class FaqService {
  faqUrl = '/assets/data/faq.json';

  constructor(private http: Http) { }

  getFaqs(): Promise<Array<Faq>> {
    return this.http
      .get(this.faqUrl)
      .toPromise()
      .then((response) => {
        const json = response.json();
        let faqs: Faq[] = Object.getOwnPropertyNames(json)
            .map((key: string) => {
              const faq = new Faq(json[key].title, json[key].description);
              return faq;
            }
        );
        console.log(faqs);
        return faqs;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
