import { queryBuilder, findOne } from './db';


export type Organization = {
    org_name: string;
    daughters?: Array<Organization> 
}

const sanitizeIndex = (index: string) => {
    return index.trim().toLowerCase().replace(' ', '_');
}

// const handleDaughters = (daughters: Organization, fatherId: number) => {

// }

export const getAll = async (id:number|null = null) => {
    const conditional = {};
    if(id) {
        conditional['id'] = id;
    }
    return await queryBuilder('SELECT * FROM organizations', conditional);
}



export const create = async (organization:Organization) => {
    let result = await getByIndex(organization.org_name);
    const index = await sanitizeIndex(organization.org_name);

    if(!result) {
        result = await queryBuilder('INSERT INTO organizations(id, name, index_name) VALUES($id, $name, $index_name)', {
            "$name": organization.org_name,
            "$index_name": index,
            "$id": null
        })
    }

    return result;
}

export const getByName = async (name:string) => {
    return await findOne('SELECT * FROM organizations WHERE name = $name', {
        "$name": name
    });
}

export const getByIndex = async (index:string) => {
    let result = sanitizeIndex(index);
    return await findOne('SELECT * FROM organizations WHERE index_name = $name', {
        "$name": result
    });
}