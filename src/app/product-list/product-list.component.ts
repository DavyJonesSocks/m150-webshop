import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  data = [];
  constructor() { }

  ngOnInit() {
    // http request get data
    var mockData = [
      {
        "name": "Gibson Les Paul Signature 2020",
        "desc": "Insert description",
        "price": "3299.90",
      },
      {
        "name": "Gibson Les Paul Signature 2019",
        "desc": "Insert description",
        "price": "3289.90",
      },
      {
        "name": "Gibson Les Paul Signature 2018",
        "desc": "Insert description",
        "price": "3249.90",
      },
      {
        "name": "Gibson Les Paul Signature 2017",
        "desc": "Insert description",
        "price": "3199.90",
      },
      {
        "name": "Gibson Les Paul Signature 2016",
        "desc": "Insert description",
        "price": "3399.90",
      },
    ];

    this.data = mockData;
  }

}
