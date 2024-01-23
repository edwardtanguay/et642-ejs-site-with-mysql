import { IEmployee } from "./interfaces";
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