import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOAST_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl:'./profile.component.html' ,
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px} 
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :-moz-placeholder {color: #999; } 
    .error :ms-input-placeholder {color: #999; }  
  `]
})
export class ProfileComponent implements OnInit {
       profileForm:FormGroup;
       private FirstName:FormControl;
       private LastName:FormControl;

       constructor(private authService:AuthService,
         private router:Router,
         @Inject(TOAST_TOKEN) private toastr:Toastr){

       }
  ngOnInit(){
    this.FirstName = new FormControl(this.authService.currentUser.firstName, [Validators.required,
    Validators.pattern('[a-zA-Z].*')]); //, Validators.required
    this.LastName= new FormControl(this.authService.currentUser.lastName, Validators.required); //, Validators.required
    this.profileForm = new FormGroup({
      firstName:this.FirstName,
      lastName:this.LastName
    })
  }
  saveProfile(formValues){
    if (this.profileForm.valid){
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.toastr.success('Profile Save');
  }
}

  cancel(){
    this.router.navigate(['events']);
  }
  validateFirstName(){
    return this.FirstName.valid || this.FirstName.untouched;
    }

  validateLastName(){
  return this.LastName.valid || this.LastName.untouched;
  }


}