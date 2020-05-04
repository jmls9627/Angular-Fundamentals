import { Component } from "@angular/core";
import { EventService } from "../share/event.service";

@Component({
    templateUrl:"./event-details.component.html",
    styles:[`
        .container{padding-left: 20px; padding-rigth:20px; }
        .event-image:{height:100 px;}
        `]
})

export class EventDetailsComponent {
    event:any;

    constructor(private eventService:EventService){


    }
 

    ngOnInit(){
        this.event=this.eventService.getEvent(1);

    }
}