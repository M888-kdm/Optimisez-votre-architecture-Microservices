import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/authService/auth-service.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  public message: string | undefined;
  public color:string="";
  public iconName:string="";

  constructor(private _router: Router,private authService:AuthServiceService,private location: Location) { }


  ngOnInit() {
    this.message=undefined
    if(this.authService.isLoggedIn()){
      this.iconName = "log-out-outline"
      this.color = "danger"
    }
    else{
      this.iconName = "log-in-outline"
      this.color = "success"
    }
  }

  loginOrLogout(){
    if(this.authService.isLoggedIn()){
      this.authService.logout();
      this.iconName = "log-in-outline"
      this.message = "Vous venez de vous deconnecter de votre compte"
      setTimeout(() => {
        this.message = undefined;
      }, 3000);
    }
    else if(!this.authService.isLoggedIn()){
      this._router.navigate(['login'])
      setTimeout(() => {
        this.message = undefined;
      }, 3000);
    }
  }

  back(): void {
    this.location.back()
  }

}
