import { RESTDataSource } from '@apollo/datasource-rest';
import { Produit } from '../model';

class ProduitsDataSource extends RESTDataSource {
  override baseURL = 'http://10.100.238.11:30001';

  async getProduits(): Promise<Produit> {
    return this.get<Produit>(`/`);
  }

  async getProduitById(id: string): Promise<Produit> {
    return this.get<Produit>(`/${encodeURIComponent(id)}`);
  }

}

export {ProduitsDataSource}