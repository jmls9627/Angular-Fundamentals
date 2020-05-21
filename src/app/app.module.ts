import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {EventsListComponent, 
        EventThumbnailComponent, 
        EventService,
        EventDetailsComponent, 
        CreateEventComponent,
        EventRouteActivator,
        EventListResolver,
        CreateSessionComponent,
        SessionListComponent,
        DurationPipe

      } from "./events/index";

import {EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { TOAST_TOKEN,Toastr} from "./common/toastr.service";
import { appRoutes } from "./routes";
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';


declare let toastr : Toastr;

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
   
  ],

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
    
   
   
    

  ],
 
  providers: [EventService,       //useClass:ClassName
             {provide: TOAST_TOKEN, useValue:toastr},
             EventRouteActivator,
             EventListResolver,
             AuthService,
             
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
