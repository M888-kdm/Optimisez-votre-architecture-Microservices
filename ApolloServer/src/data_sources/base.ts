import { RESTDataSource } from '@apollo/datasource-rest';
import { RequestOptions } from '@apollo/datasource-rest';

export class BaseDataSource<Entity extends Object> extends RESTDataSource {

    private url = "http://10.100.238.11";

    protected override requestDeduplicationPolicyFor(url: URL, request: RequestOptions) {
        const cacheKey = this.cacheKeyFor(url, request);
        return { policy: 'do-not-deduplicate' } as const;
    }

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