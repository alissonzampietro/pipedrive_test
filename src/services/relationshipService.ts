// import { Organization } from "../models/organization"
import { queryBuilder } from './dbService';
import {relationship} from './../models/relationship';
//TODO: finish
export const associateSiblings = async (sibling: Array<number>) => {
    const associations = generateSiblingRelationship(sibling);

    associations.map(async item => {
        await queryBuilder('INSERT OR IGNORE INTO relationships_organizations(id, source_id, target_id, relationship_type_id) VALUES($id, $source_id, $target_id, $relationShip)', {
            "$source_id": item.source_id, 
            "$target_id": item.target_id, 
            "$relationShip": item.relationship,
            "$id": null
        })
    })

}

export const generateSiblingRelationship = (sibling: Array<number>):Array<relationship> => {
    const associationMap = [];

    for(let i = 0; i < sibling.length;i++) {
        for(let j = 0; j < sibling.length;j++) {
            if(sibling[i] != sibling[j]) {
                associationMap.push({
                    source_id: sibling[i],
                    target_id: sibling[j],
                    relationship: 3
                })
            }
        }
    }

    return associationMap;
}

export const associateDaugther = async (sibling: Array<number>, fatherId: number) => {
    
    try {
        let siblingSize = sibling.length;

        for(let i = 0; i < siblingSize;i++) {
            await queryBuilder('INSERT OR IGNORE INTO relationships_organizations(id, source_id, target_id, relationship_type_id) VALUES($id, $source_id, $target_id, $relationShip)', {
                "$source_id": sibling[i], 
                "$target_id": fatherId, 
                "$relationShip": 2,
                "$id": null
            })
        
            await queryBuilder('INSERT OR IGNORE INTO relationships_organizations(id, source_id, target_id, relationship_type_id) VALUES($id, $source_id, $target_id, $relationShip)', {
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