import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }


  logout() {
    localStorage.removeItem("token");
}

    public isLoggedIn() {
      if(localStorage.getItem("token")== undefined || localStorage.getItem("token")=='',localStorage.getItem("token")== null){
        return false
      }
      return true
    }

   
}
