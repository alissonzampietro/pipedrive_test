import { open } from "sqlite";
import sqlite3 from "sqlite3";


const openConnection = async () => {
    return open({
        filename: __dirname+'/../../db/database.sqlite3',
        driver: sqlite3.Database
    })
}

export const queryBuilder = async (query: string) => {
    let db = await openConnection();

    return new Promise<any[]>((resolve, reject) => {
        db.all(query, {}, (err, rows) => {
            if(err) {
                reject(err);
            }else {
                resolve(rows);
            }
        })
    });
}