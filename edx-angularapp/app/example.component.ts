import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'example-component',
  templateUrl: 'example.component.html',
  directives: []
})
export class ExampleComponent implements OnInit {
  public message: string;
  constructor() {

  }

  private ngOnInit() {
    this.message = 'Hello everybody';
  }
}
