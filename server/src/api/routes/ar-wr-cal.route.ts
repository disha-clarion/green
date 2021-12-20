/* eslint-disable prettier/prettier */
import { Router, Request, Response } from 'express';
import { Container } from 'typedi';

import middlewares from '../middlewares';
import ArWrService from '../../services/ar-wr-cal.service';
import { FormatTenPowerSix, getErrorMessage } from '../../helpers';
import { IORingSizes } from "../../interfaces/IORingSizes";
import { IORingCalculatorRequest } from "../../interfaces/IORingCalculatorRequest";
import winston from 'winston';
import { IWrArCalculatorRequest } from '../../interfaces/IWrArCalculatorRequest';
import { CalculatorTypes } from '../../constants';
import { IWrArGetMaterialCTE } from '../../interfaces/IWrArGetMaterialCTE';

const route = Router();

export default (app: Router) => {
  app.use('/wrar', route);

  // get JSON config of Wr/Ar Calculators   get DropDownItems
  route.get('/getdropdownitems', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    logger.info('API [ar-wr-cal.route] called.');
    try {
      const wrArServiceInstance = Container.get(ArWrService);
      const configData: any = await wrArServiceInstance.getArWrCalcDropDownItems();
      return res.json(configData).status(200);
    } catch (e) {
      logger.error('🔥 error: File [ar-wr-cal.route]   %o', e);
      throw new Error(e);
    }
  });

  // get JSON config of Wr/Ar Calculators
  route.get('/getjsonconfig', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    logger.info('API [ar-wr-cal.route] called.');
    try {
      const wrArServiceInstance = Container.get(ArWrService);
      const configData: any = await wrArServiceInstance.getArWrCalcJSON();
      return res.json(configData).status(200);
    } catch (e) {
      logger.error('🔥 error: File [ar-wr-cal.route]   %o', e);
      throw new Error(e);
    }
  });


  route.post('/pressInCalculation', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [ar-wr-cal.route] pressInCalculation API called.');
      const wrArServiceInstance = Container.get(ArWrService);
      const output: any = await wrArServiceInstance.pressInCalculation(req.body as IWrArCalculatorRequest);
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [ar-wr-cal.route] API createOring  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });

  route.post('/floatingCalculation', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [ar-wr-cal.route] floatingCalculation API called.');
      const wrArServiceInstance = Container.get(ArWrService);
      const output: any = await wrArServiceInstance.floatingCalculation(req.body as IWrArCalculatorRequest);
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [ar-wr-cal.route] API getInterferenceInt  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });

  // get standard interference
  route.post('/getInterference', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [ar-wr-cal.route] getInterferenceInt API called.');
      const wrArServiceInstance = Container.get(ArWrService);
      const data = req.body as IWrArCalculatorRequest;
      const output: any = await wrArServiceInstance.getInterferenceInt((+data.unit), data.composite, data.interferenceTarget, (data.customInterferenceTarget ? +data.customInterferenceTarget : 0.000), (data.stationaryElementIDMax ? parseFloat(data.stationaryElementIDMax) : 0.000));
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [ar-wr-cal.route] API getInterferenceInt  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });

  // get standard clearance
  route.post('/getClearance', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [ar-wr-cal.route] getClearance API called.');
      const wrArServiceInstance = Container.get(ArWrService);
      const data = req.body as IWrArCalculatorRequest;
      const output: any = await wrArServiceInstance.getClearance((+data.unit), data.pumpType, data.componentType, (data.clearanceTarget ? data.clearanceTarget : 0.000), (data.customClearanceTarget ? +data.customClearanceTarget : 0.000), (data.rotatingElementODMax ? +data.rotatingElementODMax : 0.000), ((+data.calculatorType) === CalculatorTypes.WrArFloating ? true : false));
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [ar-wr-cal.route] API getClearance  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });

  // get rotor or stator CTE material detail
  route.post('/getCTEMaterialDetail', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [ar-wr-cal.route] getCTEMaterialDetail API called.');
      const wrArServiceInstance = Container.get(ArWrService);
      const data = req.body as IWrArGetMaterialCTE;
      const output: any = await wrArServiceInstance.getMaterialDetail(data.material, (+data.unit));
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [ar-wr-cal.route] API getCTEMaterialDetail  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });

  // get composite material Mat Check
  route.post('/getMatlCheck', middlewares.isAuth, async (req: Request, res: Response) => {
    const logger = Container.get<winston.Logger>('logger');
    try {
      logger.info('API [ar-wr-cal.route] getMatlCheck API called.');
      const wrArServiceInstance = Container.get(ArWrService);
      const data = req.body as IWrArCalculatorRequest;
      const output: any = await wrArServiceInstance.getMatlCheck((+data.unit), data.composite);
      return res.json(output).status(200);
    } catch (e) {
      logger.error('🔥 error: File [ar-wr-cal.route] API getMatlCheck  %o', e);
      return res.status(400).send({ message: getErrorMessage(e) });
    }
  });
};
