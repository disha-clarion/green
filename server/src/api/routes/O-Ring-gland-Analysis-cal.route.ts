import { Router, Request, Response } from 'express';
import { Container } from 'typedi';

import middlewares from '../middlewares';
import ORingGlandService from '../../services/O-Ring-gland-Analysis-cal.service';
import { getErrorMessage } from '../../helpers';
import { IORingSizes } from "../../interfaces/IORingSizes";
import { IORingCalculatorRequest } from "../../interfaces/IORingCalculatorRequest";
import winston from 'winston';

const route = Router();

export default (app: Router) => {
  app.use('/oringglandanalysistool', route);

  // get JSON config of O-Ring Calculators
  route.get('/rectangularglandinternalvacuumonly', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    logger.info('API [O-Ring-gland-Analysis-cal.route] called.');
    try {
      const oRingGlandServiceInstance = Container.get(ORingGlandService);
      const configData: any = await oRingGlandServiceInstance.getORingCalcJSON();
      return res.json(configData).status(200);
    } catch (e) {
      logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route]   %o', e);
      throw new Error(e);
    }
  });

  // get dash size details
  route.post('/dashSizeDetails', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    logger.info('API [O-Ring-gland-Analysis-cal.route] dashSizeDetails API called.');
    try {
      const oRingGlandServiceInstance = Container.get(ORingGlandService);
      const oRingSizes: IORingSizes[] = await oRingGlandServiceInstance.getDashsizeDetails((+req.body.unit));

      // format data
      let finalOutputObject: {
        [key: string]: any,
        data: IORingSizes[]
      } = { data: [] };
      finalOutputObject.data = oRingSizes;
      const properties = ['glandWidthNominal', 'glandWidthTolerance', 'glandWidthMin', 'glandWidthMax', 'glandDepthNominal', 'glandDepthTolerance', 'glandDepthMin', 'glandDepthMax', 'bottomRadiiNominal', 'bottomRadiiTolerance', 'bottomRadiiMin', 'bottomRadiiMax', 'gapNominal', 'gapTolerance', 'gapMin', 'gapMax', 'glandIdNominal', 'glandIdTolerance', 'glandIdMin', 'glandIdMax', 'oringCrossSectionNominal', 'oringCrossSectionMin', 'oringCrossSectionMax', 'oringIdNominal', 'oringIdMin', 'oringIdMax', 'topRadiiNominal', 'topRadiiTolerance', 'topRadiiMin', 'topRadiiMax', 'glandCenterlineNominal', 'glandCenterlineTolerance', 'glandCenterlineMin', 'glandCenterlineMax', 'glandODNominal', 'glandODTolerance', 'glandODMin', 'glandODMax'];
      for (var property in req.body) {
        if (req.body.hasOwnProperty(property) && property != 'data') {

          if (property != 'rule' && property != 'materialCteN' && property != 'unit' && property != 'unitTemp' && property != 'inputOption' && property != 'materialCteNominal' && property != 'token' && property != 'error' && property != 'warning' && property != 'ctedata' && property != 'calculationType' && property != 'rectangleType') {
            if ((req.body[property] && properties.indexOf(property) > -1)) {
              finalOutputObject[property] = parseFloat(req.body[property]).toFixed(req.body.fixedTo);
              finalOutputObject.operatingTemperatureNominal = parseFloat(req.body.operatingTemperatureNominal);
              finalOutputObject.glandAngleNominal = parseFloat(req.body.glandAngleNominal);
              finalOutputObject.glandAngleTolerance = parseFloat(req.body.glandAngleTolerance);
              finalOutputObject.glandAngleMin = parseFloat(req.body.glandAngleMin);
              finalOutputObject.glandAngleMax = parseFloat(req.body.glandAngleMax);
            } else if ((req.body[property] || parseFloat(req.body[property]) === 0) && property != "operatingTemperatureNominal")
              finalOutputObject[property] = parseFloat(req.body[property]).toFixed(1);
          } else {
            if (req.body[property])
              finalOutputObject[property] = req.body[property];
          }
        }
      }

      return res.json(finalOutputObject).status(200);
    } catch (e) {
      logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route] API dashSizeDetails  %o', e);
      throw new Error(e);
    }
  });

  route.post('/createoring', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [O-Ring-gland-Analysis-cal.route] createOring API called.');
      const oRingGlandServiceInstance = Container.get(ORingGlandService);
      const output: any = await oRingGlandServiceInstance.createRectangleOring(req.body as IORingCalculatorRequest);
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route] API createOring  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });

  route.post('/createOringDovetail', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [O-Ring-gland-Analysis-cal.route] createOringDovetail API called.');
      const oRingGlandServiceInstance = Container.get(ORingGlandService);
      const output: any = await oRingGlandServiceInstance.createDovetailOring(req.body);
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route] API createOringDovetail  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });

  route.post('/createOringHalfDovetail', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [O-Ring-gland-Analysis-cal.route] createOringHalfDovetail API called.');
      const oRingGlandServiceInstance = Container.get(ORingGlandService);
      const output: any = await oRingGlandServiceInstance.createHalfDovetailOringInternalVacuumOnly(req.body);
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route] API createOringHalfDovetail  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });
};
