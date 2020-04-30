import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component({
selector:'event-thumbnail',
template:`
<div class="well hoverwell thumbnail">
   <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div  [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
      Time: {{event?.time}}
       <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
       <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
       <span *ngSwitchDefault>(Normal Start)</span>
    </div>
     <div>Price: \${{event?.price}}</div>
    <div [hidden]="!event?.location">
   <span>Location: {{event?.location?.address}}</span> 
   <span class="pad-left">{{event?.location?.city}},
                 {{event?.location?.country}}</span>
  </div>
  <div [hidden]="!event?.OnlineUrl">
         OnlineUrl: {{event?.OnlineUrl}}
  </div>
  </div>
  
`,
styles:[` 

.thumbnail {min-height:210px;}
.pad-left {margin-left: 10px;}
.well div {color: #bbb;}
`]
})

export class EventThumbnailComponent{
@Input() event:any;
@Output() eventclick= new EventEmitter();
pro:string="Show me the money";





// [class.green]="event?.time ==='8:00 am'"
// [ngClass]="{green: event?.time==='8:00 am', bold: event?.time==='8:00 am'}"
getStartTimeClass(){
  const Early= this.event && this.event.time ==='8:00 am';
  return {green: Early, bold: Early };
// if( this.event && this.event.time ==='8:00 am')
// return 'green bold'  //return ['green', 'bold'] 
// return ''             // return [] 

}
//[style.color]=" event?.time ==='8:00 am' ? '#003300' : '#bbb' "
//[ngStyle]="{ 'color': event?.time ==='8:00 am' ? '#003300' : '#bbb', 
//       'font-weight': event?.time ==='8:00 am' ? 'bold' : 'normal'} "
getStartTimeStyle():any{
  if (this.event && this.event.time ==='8:00 am')
  return {color :'#003300', 'font-weight': 'bold' };
  return{};
}

}