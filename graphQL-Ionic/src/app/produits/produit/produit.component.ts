import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Produit } from 'src/app/models/produit';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent  implements OnInit {
  @Input() produit!:Produit;
  isModalOpen = false;

  constructor(private _router: Router,private authService:AuthServiceService) { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  passerCommande(){
    if(this.authService.isLoggedIn()){
      this._router.navigate(['commander'], { state: { fromModal: true } });
    }
    else{
      this._router.navigate(['login'], { state: { fromModal: true } });
    }
  }

 
}
