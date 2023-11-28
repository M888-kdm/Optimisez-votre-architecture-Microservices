import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Produit } from 'src/app/models/produit';
import { GET_PRODUITS } from 'src/assets/graphql/queries';
import { AuthServiceService } from '../services/authService/auth-service.service';



@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent  implements OnInit {
  public produits: Produit[] = [];
  private querySubscription!: Subscription;
  constructor(private apollo: Apollo,private _router: Router,private authService:AuthServiceService) { }

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_PRODUITS,
      })
      .valueChanges.subscribe(({ data}) => {
        this.produits = data.produits;
      });
     
  }

 
}
