import { queryBuilder, findOne, findAll } from './dbService';
import { OrganizationPayload } from '../models/organization';
import * as relationshipService from './relationshipService';

export const sanitizeIndex = (index: string) => {
    return index.trim().toLowerCase().replace(' ', '_');
}

export const getAll = async (id:number|null = null) => {
    const conditional = {};
    if(id) {
        conditional['id'] = id;
    }
    return await queryBuilder('SELECT * FROM organizations', conditional);
}

export const handleAssociations = async (daughters: Array<OrganizationPayload>, fatherId: number) => {

    try {
        let daughtersSize = daughters.length;
        let daughtersList:Array<number> = [];

        for(let i = 0; i < daughtersSize;i++) {
            let response = await create(daughters[i]);
            daughtersList.push(response.id);
        }

        await relationshipService.associateSiblings(daughtersList);
        await relationshipService.associateDaugther(daughtersList, fatherId);

    }catch(error) {
        throw new Error(error);
    }
}



export const create = async (organization:OrganizationPayload) => {
    try {
        let result = await getByIndex(organization.org_name);
        const index = await sanitizeIndex(organization.org_name);

        if(!result) {
            result = await queryBuilder('INSERT INTO organizations(id, name, index_name) VALUES($id, $name, $index_name)', {
                "$name": organization.org_name,
                "$index_name": index,
                "$id": null
            })
            result = await getByID(result.lastID);
        }

        if(organization.daughters) {
            handleAssociations(organization.daughters, result.id);
        }

        return result;
    }catch(error) {
        throw new Error(error);
    }
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

export const getOrgTree = async(orgId: number) => {
    return await findAll('SELECT o.name as org_name, rt."type" as relationships_type FROM organizations o INNER JOIN relationships_organizations ro ON o.id = ro.source_id INNER JOIN relationships_types rt ON ro.relationship_type_id = rt.id WHERE ro.target_id = $orgId;', {
        "$orgId": orgId
    });
}

export const getByID = async (id:number) => {
    return await findOne('SELECT * FROM organizations WHERE id = $id', {
        "$id": id
    });
}