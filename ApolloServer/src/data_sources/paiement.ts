import { Paiement } from '../model';
import { BaseDataSource } from './base.js';

export class PaiementDataSource extends BaseDataSource<Paiement> {

    constructor(){
        super("30003");
    }

}