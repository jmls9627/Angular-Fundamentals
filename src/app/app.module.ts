import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from "./events/events-thumbnail.component";
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from "./events/share/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';




@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
   
  ],

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
   
   
    

  ],
 
  providers: [EventService,
             ToastrService,
             EventRouteActivator,
             EventListResolver ,
             
             {
               provide:'canDeactivateCreateEvent',
              useValue: CheckDirtyState
             },
           ],


  bootstrap: [ EventsAppComponent]
})
export class AppModule { }

export function CheckDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('you have not saved this event, do you really want to cancel?');
  return true;
}
