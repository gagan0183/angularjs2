import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventory-app',
  templateUrl: './inventoryapp.component.html',
  styleUrls: ['./inventoryapp.component.css']
})
export class InventoryappComponent implements OnInit {

  products: Product[];

  constructor() {
    let product1 = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      90);
    let product2 = new Product(
      'MYSHOES',
      'Black running shoes',
      '/resources/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running shoes'],
      90);
    let product3 = new Product(
      'NEATO',
      'Blue',
      '/resources/images/products/black-tape.jpg',
      ['Men', 'Accessories', 'Tape'],
      90);
    this.products = [product1, product2, product3];
  };

  ngOnInit() {
  }

  productWasSelected(product: Product): void {
    console.log("Product selects : " , product);
  }
}
