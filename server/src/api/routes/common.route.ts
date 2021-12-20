import { Router, Request, Response } from 'express';
import { Container } from 'typedi';

import Logger from '../../loaders/logger';

import middlewares from '../middlewares';
import CommonService from '../../services/common.service';
import winston from 'winston';
const route = Router();

export default (app: Router) => {
  app.use('/common', route);

  route.get('/materialchoice', async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    logger.info('API [common.route] called.');
    try {
      // service instance
      const oRingGlandServiceInstance = Container.get(CommonService);
      const configData: any = await oRingGlandServiceInstance.getMaterialChoiceJSON();
      return res.json(configData).status(200);
    } catch (e) {
      logger.error('🔥 error: File [common.route]   %o', e);
      throw new Error(e);
    }
  });
};
