import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  @Input() data = [];
  @Input() amount;

  getTotal() {
    let total = 0;

    for (let item of this.data)
      total += parseFloat(item.price) * (item.count || 1)

    return total.toFixed(2);
  }
}
