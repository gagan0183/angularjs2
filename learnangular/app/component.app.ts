import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './partials/app.html',
    styles: [ ".btn {background-color: green;}" ]
})
export class AppComponent {
  name: string;
  artists: any;

  onClick(item, artistContainer) {
    this.name = item.name;
    artistContainer.style.backgroundColor = '#FECE4E';
  }

  constructor() {
    this.name = 'name';
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

  addArtist(value) {
    if (value != '') {
      this.artists.push({
        {
          name: value,
          school: 'School'
        }
      });
    }
  }
}
