import { RESTDataSource } from '@apollo/datasource-rest';

export class BaseDataSource<Entity extends Object> extends RESTDataSource {

    protected endpoint: string = "";
    override baseURL = `${process.env.URL}/${this.endpoint}/`;

    async getObjects(): Promise<any> {
        return this.get('');
    }

    async getObjectById(id: number): Promise<any> {
        return this.get(`${id}`);
    }

    async create(entity: Entity): Promise<any> {
        return this.post('', { body: entity });
    }

}