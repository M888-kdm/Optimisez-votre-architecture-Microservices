import { BaseDataSource } from './base.js';
export class CommandeDataSource extends BaseDataSource {
    constructor() {
        const port = 30002;
        super(`${port}`);
    }
}
