import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("[\\w\\-\\s\\/]+")
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }

  yearValidator(control) {
    if(control.value.trim().length === 0) {
      return null;
    }
    let minvalue = 1900;
    let maxvalue = 2100;
    if(control.value >= minvalue && control.value <= maxvalue) {
      return null;
    } else {
      return { 'year' : {
        min: minvalue,
        max: maxvalue
      }};
    }
  }
}
