import { queryBuilder } from './db';


export type Organization = {
    org_name: string;
    daughters?: Array<Organization> 
}

export const getAll = async (id:number|null = null) => {
    const conditional = {};
    if(id) {
        conditional['id'] = id;
    }
    return await queryBuilder('SELECT * FROM organizations', conditional);
}

/** 
 * 1 - create association with all
 * 
 * 
 * 
*/

export const createRelationships = (data:Organization) => {

}