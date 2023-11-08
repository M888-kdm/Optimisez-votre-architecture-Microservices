import { BaseDataSource } from './base.js';
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
export class CommandeDataSource extends BaseDataSource {
    constructor() {
        super();
        this.endpoint = "commande";
    }
}
