import mysql from 'mysql';
import dotenv from 'dotenv';
    
dotenv.config();
    
export const getRecordsWithSql = <T>(sql: string) => {
    return new Promise<T[]>((resolve, reject) => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: 'northwind'
        });
        connection.connect((err) => {
            if (err) throw err;
            connection.query(sql, (err, records) => {
                if (err) {
                    reject({
                        message: err
                    })
                } else {
                    resolve(records);
                }
    
            });
        });
    });
}