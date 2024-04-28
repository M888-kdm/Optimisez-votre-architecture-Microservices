import { RESTDataSource } from '@apollo/datasource-rest';
import { RequestOptions } from '@apollo/datasource-rest';

export class BaseDataSource<Entity extends Object> extends RESTDataSource {

    protected async getObjects(): Promise<Entity> {
        return this.get('', { cacheOptions: { ttl: 0 }});
    }

    protected async getObjectById(id: number): Promise<Entity> {
        return this.get(`${id}`);
    }

    protected async create(entity: Entity): Promise<Entity> {
        const a = this.post('', { body: entity });
        return a;
    }

}