// third party imports
import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import winston from 'winston';

// application imports
import middlewares from '../middlewares';
import GlandSizeCalcService from '../../services/Gland-Size-cal.service';
import { getErrorMessage } from '../../helpers';
import { IGlandSizeCalculatorRequest } from '../../interfaces/IGlandSizeCalculatorRequest';

const route = Router();

export default (app: Router) => {
  app.use('/glandsizecalc', route);

  // get JSON config of O-Ring Calculators
  route.get('/getjsonconfig', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    logger.info('API [Gland-Size-cal.route] called.');
    try {
      const oRingGlandServiceInstance = Container.get(GlandSizeCalcService);
      const configData: any = await oRingGlandServiceInstance.getGlandSizeCalcJSON();
      return res.json(configData).status(200);
    } catch (e) {
      logger.error('🔥 error: File [Gland-Size-cal.route]   %o', e);
      throw new Error(e);
    }
  });

  route.post('/createGland', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [Gland-Size-cal.route] createGland API called.');
      const glandSizeServiceInstance = Container.get(GlandSizeCalcService);
      const output: any = await glandSizeServiceInstance.createGland(req.body as IGlandSizeCalculatorRequest);
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [Gland-Size-cal.route] API createGland  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });
};
