import { RESTDataSource } from '@apollo/datasource-rest';
import { User } from '../model';

class AuthAPI extends RESTDataSource {
  override baseURL = 'http://localhost:3000/';

  async login(email,password): Promise<User> {
    const a = this.post('login', { body: {email:email,password:password} });
    return a;
  }

  async register(firstName,lastName,email,password): Promise<User> {
    const a = this.post('register', { body: {firstName:firstName,lastName:lastName,email:email,password:password} });
    return a;
  }
  
 

}

export {AuthAPI}