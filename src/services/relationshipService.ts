import { Organization } from "../models/organization"
import { queryBuilder } from './dbService';

//TODO: finish
export const associateSiblings = async (org: Organization, siblingId:number) => {
    try {
        await queryBuilder('INSERT INTO relationships_organizations(source_id, target_id, relationship_type_id) VALUES($source_id, $target_id, $relationShip)', {
            "$source_id": org.id, 
            "$target_id": siblingId, 
            "$relationShip": 3
        })
    
        await queryBuilder('INSERT INTO relationships_organizations(source_id, target_id, relationship_type_id) VALUES($source_id, $target_id, $relationShip)', {
            "$source_id": siblingId, 
            "$target_id": org.id, 
            "$relationShip": 3
        })
    }catch(error) {
        throw new Error(error);
    }

}

export const associateDaugther = async (sibling: Array<number>, fatherId: number) => {
    
    try {
        let siblingSize = sibling.length;

        for(let i = 0; i < siblingSize;i++) {
            await queryBuilder('INSERT INTO relationships_organizations(id, source_id, target_id, relationship_type_id) VALUES($id, $source_id, $target_id, $relationShip)', {
                "$source_id": sibling[i], 
                "$target_id": fatherId, 
                "$relationShip": 2,
                "$id": null
            })
        
            await queryBuilder('INSERT INTO relationships_organizations(id, source_id, target_id, relationship_type_id) VALUES($id, $source_id, $target_id, $relationShip)', {
                "$source_id": fatherId, 
                "$target_id": sibling[i], 
                "$relationShip": 1,
                "$id": null
            })
        }
    }catch(error) {
        throw new Error(error);
    }

    
}