    import { IEmployee } from './interfaces';
     
    export const getEmployees = () => {
        return new Promise<IEmployee[]>(async (resolve, reject) => {
            resolve([
                {
                    id: 1,
                    first_name: 'first1',
                    last_name: 'last1',
                    job_title: 'title1'
                },
                {
                    id: 2,
                    first_name: 'first2',
                    last_name: 'last2',
                    job_title: 'title2'
                },
                {
                    id: 3,
                    first_name: 'first3',
                    last_name: 'last3',
                    job_title: 'title3'
                }
            ])
        })
    }