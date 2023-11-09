import { RESTDataSource } from '@apollo/datasource-rest';
import { BaseDataSource } from './base.js';
import { Commande } from '../model.js';

// export class CommandeDataSource extends RESTDataSource {

//     override baseURL = "http://10.100.238.11:30002/";

//     async getCommandes(): Promise<any> {
//         return this.get('');
//     }

//     async getCommandeById(id: number): Promise<any> {
//         return this.get(`${id}`);
//     }

//     async nouvelleCommande(commande: Object): Promise<any> {
//         console.log(commande);
//         return this.post('', { body: commande });
//     }

// }

export class CommandeDataSource extends BaseDataSource<Commande> {

    constructor(){
        super("30002");
    }

}