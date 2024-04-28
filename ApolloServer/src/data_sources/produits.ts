import { Produit } from '../model.js';
import { BaseDataSource } from './base.js';

export class ProduitsDataSource extends BaseDataSource<Object> {

  constructor(){
    super();
    this.baseURL = "http://microservice-produits:9001";
  }

}