import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { EventService } from '../share/event.service';
@Injectable()
export class EventRouteActivator implements CanActivate{

    constructor(private eventService:EventService, private router:Router){

    }
         
    canActivate(route:ActivatedRouteSnapshot){
       const eventExist= !!this.eventService.getEvent(+route.params['id']);

       if(!eventExist)
         this.router.navigate(['/404']);
     return eventExist;
    }
}