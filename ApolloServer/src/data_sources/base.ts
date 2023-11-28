import { RESTDataSource } from '@apollo/datasource-rest';

export class BaseDataSource<Entity extends Object> extends RESTDataSource {

    private url = "http://10.100.238.11";

    // constructor(){
    //     super();
    //     this.baseURL = `${this.url}:${port}/`;
    // }

    protected async getObjects(): Promise<Entity> {
        return this.get('');
    }

    protected async getObjectById(id: number): Promise<Entity> {
        return this.get(`${id}`);
    }

    protected async create(entity: Entity): Promise<Entity> {
        const a = this.post('', { body: entity });
        return a;
    }

}