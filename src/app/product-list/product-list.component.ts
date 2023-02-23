import { Component } from '@angular/core';
import { CartService } from '../cart.service';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  product: Product|undefined

  constructor (
    private cartService:CartService,
  ){}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(){
    window.alert('You will know later')
  }
  addToCart(product:Product){
    this.cartService.addToCart(product)
    // window.alert('Added to cart!')
    console.log("added")
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/