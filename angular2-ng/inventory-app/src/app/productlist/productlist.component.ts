import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `<div class="ui items">
                <product-row
                    *ngFor="let myProduct of productList"
                    [product]="myProduct"
                    (click)='clicked(myProduct)'
                    [class.selected]="isSelected(myProduct)">
                </product-row>
              </div>

  `
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

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if(!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
