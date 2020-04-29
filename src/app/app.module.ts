import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from "./events/events-thumbnail.component";
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent

  ],
 
 // providers: [],
  bootstrap: [ EventsAppComponent]
})
export class AppModule { }