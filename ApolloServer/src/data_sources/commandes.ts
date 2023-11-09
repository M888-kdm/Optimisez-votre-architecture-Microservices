import { RESTDataSource } from '@apollo/datasource-rest';
import { BaseDataSource } from './base.js';
import { Commande } from '../model.js';

export class CommandeDataSource extends BaseDataSource<Commande> {

    constructor(){
        const port = 30002;
        super(`${port}`);
    }

}