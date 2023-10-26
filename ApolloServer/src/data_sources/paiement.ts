import { Paiement } from '../model';
import { BaseDataSource } from './base';

export class PaiementDataSource extends BaseDataSource<Paiement> {

    constructor(){
        super();
        this.endpoint = "paiement";
    }

}