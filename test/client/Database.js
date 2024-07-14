import pg from 'pg';
import logger from '../services/logger';
import TodayDate from '../services/TodayDate';

class Database {
    constructor() {
        this.pool = new pg.Pool({
            user: 'user',
            password: 'password',
            host: 'host',
            port: 1234,
            database: 'database',
            ssl: {
                rejectUnauthorized: false,
            },
        });
    }
    customer = null; // for another queries, so you can use the same customer

    async yourQuery() {
        try {
            const currentDate = TodayDate.getTodayDate();
            const queryText = `
            SELECT customer_id, customer_status 
            FROM db.customer dbc 
            WHERE created_dt > $1 
            ORDER BY customer_status DESC`;
            const client = await this.pool.connect();
            const result = await client.query(queryText, [
                `${currentDate} 00:00:00.000 +0300`,
            ]); // query contained $1 so thats where the value array comes in
            logger.info(result.rowCount);
            this.customer = result.rows[0].customer_id;
            logger.debug(`Found customer with a id ${this.customer}`);
            client.release();
        } catch (error) {
            logger.error('Error executing query:', error);
        }
    }
}

export default Database;
