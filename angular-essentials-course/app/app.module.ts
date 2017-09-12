import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from  './app.component';
import { MediaItemComponent } from  './media.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations:[
    AppComponent,
    MediaItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
