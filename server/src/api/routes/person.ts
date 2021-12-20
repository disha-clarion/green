import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import PersonService from '../../services/person';
import { IPerson } from '../../interfaces/IPerson';
import middlewares from '../middlewares';
const route = Router();

export default (app: Router) => {
  app.use('/person', route);

  // API URL - /api/person
  route.get('/', middlewares.isAuth, async (req: Request, res: Response) => {
    try {
      // const logger = Container.get('logger');
      const personServiceInstance = Container.get(PersonService);
      const persons: IPerson[] = await personServiceInstance.getAll();
      // const personServiceInstance = Container.get(ORinService);
      // const persons: IOringAndGlandDetails[] = await personServiceInstance.getDashsizeDetails();
      return res.json(persons).status(200);
    } catch (e) {
      throw new Error(e);
    }
  });

  route.get('/getPersons', async (req: Request, res: Response) => {
    try {
      // variables
      const dataPath = "data/persons.json";
      const fs = require('fs');
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }

        res.send(JSON.parse(data));
      });
    } catch (error) {
      throw new Error(error);
    }
  });
};
