import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemList = [];
  constructor() { }

  addToCart(item) {
    if (this.itemList.includes(item)) {
      let index = this.itemList.indexOf(item);
      this.itemList[index].count++;
      return;
    }

    item.count = 1;
    this.itemList.push(item);
  }

  getItemList() {
    return this.itemList;
  }
}
