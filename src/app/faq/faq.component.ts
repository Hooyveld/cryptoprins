import { Component, OnInit } from '@angular/core';

import { FaqService } from './faq.service'
import { Faq } from './faq.model'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],

  providers: [FaqService]
})
export class FaqComponent implements OnInit {

  faqs: Faq[] = [];

  constructor(private faqService: FaqService) { }

  getFaqs(): void {
    this.faqService
      .getFaqs()
      .then(faqs => this.faqs = faqs)
      .catch(error => {
        console.log('An error occurred', error)
      });
  }

  ngOnInit() {
    this.getFaqs();
  }

}
