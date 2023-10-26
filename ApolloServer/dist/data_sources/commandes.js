import { RESTDataSource } from '@apollo/datasource-rest';
export class CommandeDataSource extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "";
    }
    async getCommandes() {
        return this.get('');
    }
    async getCommandeById(id) {
        return this.get(`${id}`);
    }
    async createCommande(commande) {
        return this.post('');
    }
}
