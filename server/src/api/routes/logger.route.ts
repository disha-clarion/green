import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import LoggerService from "../../services/logger.service";
import { ILogInputDTO } from "../../interfaces/ILog";
import { celebrate, Joi } from 'celebrate';
import winston from 'winston';

const route = Router();

export default (app: Router) => {
  app.use('/logger', route);

  route.post(
    '/log',
    celebrate({
      body: Joi.object({
        message: Joi.string().required(),
        level: Joi.number().required(),
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get<winston.Logger>('logger');
      logger.debug('Calling Log endpoint with body: %o', req.body)
      try {
        const logInputDTO: ILogInputDTO = req.body;
        const loggerServiceInstance = Container.get(LoggerService);
        const configData: any = await loggerServiceInstance.log(logInputDTO);
        return res.json(configData).status(200);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
