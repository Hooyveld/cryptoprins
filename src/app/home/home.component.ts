import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardUsps =
  [
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "link",
      "description": "Link CryptoPrins to your exchange."
    },
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "link",
      "description": "Link CryptoPrins to your exchange."
    },
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "link",
      "description": "Link CryptoPrins to your exchange."
    },
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "link",
      "description": "Link CryptoPrins to your exchange."
    }
  ];

  listUsps =
  [
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "SECURE STORAGE",
      "description": "You are keeping the controle over your own exchange and your information is always safely encrypted."
    },
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "SECURE STORAGE",
      "description": "You are keeping the controle over your own exchange and your information is always safely encrypted."
    },
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "SECURE STORAGE",
      "description": "You are keeping the controle over your own exchange and your information is always safely encrypted."
    },
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "SECURE STORAGE",
      "description": "You are keeping the controle over your own exchange and your information is always safely encrypted."
    },
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "SECURE STORAGE",
      "description": "You are keeping the controle over your own exchange and your information is always safely encrypted."
    },
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "SECURE STORAGE",
      "description": "You are keeping the controle over your own exchange and your information is always safely encrypted."
    },
    {
      "icon": "/assets/images/usps/analytics.svg",
      "title": "SECURE STORAGE",
      "description": "You are keeping the controle over your own exchange and your information is always safely encrypted."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
