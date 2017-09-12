import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media.component.html',
  styleUrls: ['app/media.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  onDelete() {
    console.log("p");
    this.delete.emit(this.mediaItem);
  }
}
