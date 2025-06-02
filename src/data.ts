import { faker } from '@faker-js/faker';


export class DataFactory {
    static postData(){
        return{
            name: faker.person.fullName(),
            team: faker.company.name(),
            position: faker.helpers.arrayElement(['GK', 'DF', 'MF', 'FW']),
            goals: faker.number.int({ min: 0, max: 100 })
        }
    }
    static updateData(){
        return{
            name: faker.person.fullName(),
            team: faker.company.name(),
            position: faker.helpers.arrayElement(['GK', 'DF', 'MF', 'FW']),
            goals: faker.number.int({ min: 0, max: 100 })
        }
    }
}