import { Produit } from '../model.js';
import { BaseDataSource } from './base.js';

export class ProduitsDataSource extends BaseDataSource<Produit> {

  constructor(){
      const port = 30001;
      super(`${port}`);
  }

}