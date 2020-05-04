import { Component } from "@angular/core";
import { EventService } from "../share/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl:"./event-details.component.html",
    styles:[`
        .container {padding-left: 20px; padding-rigth:20px; }
        .event-image {height: 100px;}
        `]
})

export class EventDetailsComponent {
    event:any;

    constructor(private eventService:EventService, private route:ActivatedRoute){


    }
 

    ngOnInit(){
        this.event=this.eventService.getEvent(
            +this.route.snapshot.params['id']);

    }
}