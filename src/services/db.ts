import { open } from "sqlite";
import sqlite3 from "sqlite3";

sqlite3.verbose();

const openConnection = async () => {
    return await open({
        filename: __dirname+'/../../db/database.sqlite3',
        driver: sqlite3.Database
    })
}

export const queryBuilder = async (query: string, params: {} = {}) => {
    try {
        let db = await openConnection();
        return await db.all(query, params);
    }catch(error) {
        throw new Error(error);
    }
}

export const findOne = async (query: string, params: {} = {}) => {
    try {
        let db = await openConnection();
        return await db.get(query, params);
    }catch(error) {
        throw new Error(error);
    }
}