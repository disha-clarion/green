import { Service, Inject } from 'typedi';
import { IPerson } from '../interfaces/IPerson';

@Service()
export default class PersonService {
    constructor(
        @Inject('personModel') private personModel: Models.PersonModel
    ) { }


    public async getAll(): Promise<IPerson[]> {
        const userRecord = await this.personModel.find({});
        if (!userRecord) {
            throw new Error('person not found');
        }
        else {
            return userRecord;
        }
    }
}