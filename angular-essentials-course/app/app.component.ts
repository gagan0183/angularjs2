import { Component } from '@angular/core';

@Component({
  selector : 'app',
  templateUrl: './app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science fiction',
    year: 2000,
    watchedOn: null,
    isFavorite: true
  };

  onMediaItemDelete(mediaItem) {
    console.log(mediaItem);
  }
}
