import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './partials/app.html'
})
export class AppComponent {
  name: string;
  artists: any;

  onClick(e) {
    console.log(e);
  }

  constructor() {
    this.name = 'Names';
    this.artists = [
      {
        name: 'Barot Bellingham',
        school: 'Penn state'
      },
      {
        name: 'Jonathans',
        school: 'cals'
      },
      {
        name: 'Posts',
        school: 'c'
      }
    ]
  }
}
