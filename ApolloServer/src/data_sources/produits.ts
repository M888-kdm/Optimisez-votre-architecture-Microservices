import { Produit } from '../model.js';
import { BaseDataSource } from './base.js';

export class ProduitsDataSource extends BaseDataSource<Object> {

  // constructor(){
  //     const port = 9001;
  //     // super(`${port}`);
  // }

  constructor(){
    super();
    this.baseURL = "http://microservice-produits:4000";
  }

}