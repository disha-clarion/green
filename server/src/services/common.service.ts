import { Service, Inject } from 'typedi';
import * as fs from 'fs';

@Service()
export default class CommonService {
    constructor(
        @Inject('logger') private logger
    ) { }

    // get material choice choice list
    public async getMaterialChoiceJSON(): Promise<any> {
        const dataPath = "data/material-choice.json";
        const data = await fs.promises.readFile(dataPath, "utf8");
        return new Promise((resolve, reject) => {
            if (data) {
                this.logger.info('[common.service.ts] material choice data found.');
                // parse JSON
                var jsonContent = JSON.parse(data);
                return resolve(jsonContent);
            }
            else {
                this.logger.info('[common.service.ts] no material choice data found.');
                return reject("No data found in json file.");
            }
        });
    }
}