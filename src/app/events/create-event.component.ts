import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IEvent, EventService } from './share';
@Component({
templateUrl:'./create-event.component.html',
styles: [`
em {float:right; color:#E05C65; padding-left:10px} 
.error input {background-color:#E3C3C5;}
.error ::-webkit-input-placeholder {color: #999; }
.error ::-moz-placeholder {color: #999; }
.error :-moz-placeholder {color: #999; } 
.error :ms-input-placeholder {color: #999; }  
`]
})

export class CreateEventComponent {
    event:any;
    newEvent;
    isDirty:boolean=true;

    constructor(private router:Router, private eventService:EventService ){

    }

   ngOnInit(){
    this.event= {
      name: 'NgSpectacular',
      date:new Date('3/29/2086') ,
      time: '10:00 am',
      price: 700.99,
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      },
      onlineUrl:'http://ngSpectacular.com',
      imageUrl:'http://ngSpectacular.com/logo.png'
  }

   }

    saveEvent(formValues){
     this.eventService.saveEvent(formValues);
     this.isDirty=false;
     this.router.navigate(['/events']);

    }
    
    cancel() {
      this.router.navigate(['/events'])
    }
  }
