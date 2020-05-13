import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { FormControl } from '@angular/forms';





@Injectable()
export class AuthService{
    currentUser:IUser;
   loginUser(userName:string, password:string){
     this.currentUser={
         id:1,
         userName:userName,
         firstName:'Jose',
         lastName:'Lopez'


     }
   }

   isAuthenticated(){
       return !!this.currentUser;
   }

   updateCurrentUser(firstName:string, lastName:string){
       this.currentUser.firstName=firstName;
       this.currentUser.lastName=lastName;
   }
}