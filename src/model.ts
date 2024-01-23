import { ICustomer, IEmployee } from "./interfaces";
import { getRecordsWithSql } from "./mysqltools";

export const getEmployees = () => {
	return new Promise<IEmployee[]>(async (resolve, reject) => {
		try {
			const employees = await getRecordsWithSql<IEmployee>('SELECT * FROM employees');
			resolve(employees);
		}
		catch(e) {
			reject(e);
		}
	
	})
}

    export const getCustomers = () => {
        return new Promise<ICustomer[]>(async (resolve, reject) => {
            try {
                const customers = await getRecordsWithSql<ICustomer>(`
    SELECT
        c.id,
        c.company as company_name,
        COUNT(o.id) AS number_of_orders
    FROM customers AS c
    LEFT JOIN
        orders as o ON c.id = o.customer_id
    GROUP BY
        c.id, c.company
    ORDER BY
        number_of_orders desc
                `);
                console.log(customers);
                resolve(customers);
            }
            catch(e) {
                reject(e);
            }
     
        })
    }