import { Commande } from '../model';
import { BaseDataSource } from './base';

// export class CommandeDataSource extends RESTDataSource {

//     override baseURL = `${process.env.URL}/commande/`;

//     async getCommandes(): Promise<any> {
//         return this.get('');
//     }

//     async getCommandeById(id: number): Promise<any> {
//         return this.get(`${id}`);
//     }

//     async nouvelleCommande(commande: Commande): Promise<any> {
//         return this.post('', { body: commande });
//     }

// }

export class CommandeDataSource extends BaseDataSource<Commande> {

    constructor(){
        super();
        this.endpoint = "commande";
    }

}