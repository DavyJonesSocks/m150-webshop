import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public sites;
  constructor() {

    //mockup will later be replaced by custom user inputs
    this.sites = [
      {
        "label": "Stratocaster-Modelle",
        "url": "",
      },
      {
        "label": "Telecaster-Modelle",
        "url": "",
      },
      {
        "label": "Singlecut-Modelle",
        "url": "",
      },
      {
        "label": "Doublecut-Modelle",
        "url": "",
      },
    ]
  }

  ngOnInit() {
  }

}
