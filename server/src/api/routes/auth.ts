import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import winston from 'winston';
import Logger from '../../loaders/logger';
import AuthService from '../../services/auth';

const route = Router();

export default (app: Router) => {
  app.use('/auth', route);

  route.get(
    '',
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get<winston.Logger>('logger');
      logger.info('Calling auth endpoint with body: %o', req.body);
      try {
        const authServiceInstance = Container.get(AuthService);
        const { token } = await authServiceInstance.Auth();
        return res.status(201).json({ token });
      } catch (e) {
        Logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
