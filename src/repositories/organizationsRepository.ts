import {queryBuilder} from './../services/db';

export default class OrganizationsRepository {
    async getAll() {
        try {
            return await queryBuilder('SELECT * FROM organizations');   
        }catch(error){
            throw new Error(error);
        }
    }
}