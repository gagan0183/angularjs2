import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media.component.html',
  styleUrls: ['app/media.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  onDelete() {
    console.log("p");
  }
}
