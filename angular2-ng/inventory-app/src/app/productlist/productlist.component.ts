import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-list',
  inputs: ['productsList'],
  outputs: ['onProductSelected'],
  template: ``
})
export class ProductlistComponent implements OnInit {

  productList: Product[];
  onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
