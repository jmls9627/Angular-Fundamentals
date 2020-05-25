import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession, EventService } from '../events';
@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.component.html',

    styles:[`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100 px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924; }
    `]
})

export class NavBarComponent{
    searchTerm: string='';
    foundSessions:ISession[];
    constructor(public auth:AuthService, private eventService:EventService){

    }


    searchSession(searchTerm){
      this.eventService.searchSession(searchTerm).subscribe
      (sessions=> { this.foundSessions=sessions;
        console.log(this.foundSessions);
         })
    }

}