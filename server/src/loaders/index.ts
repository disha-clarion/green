import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import jobsLoader from './jobs';
import Logger from './logger';
//We have to import at least all the events once so they can be triggered
import './events';
import metricAs568aHalfDovetailSeries from '../models/metricAs568aHalfDovetailSeries';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  /**
   * WTF is going on here?
   *
   * We are injecting the mongoose models into the DI container.
   * I know this is controversial but will provide a lot of flexibility at the time
   * of writing unit tests, just go and check how beautiful they are!
   */

  // Models
  const personModel = {
    name: 'personModel',
    // Notice the require syntax and the '.default'
    model: require('../models/person').default,
  };

  const oringAndGlandDetailsModel = {
    name: 'oringAndGlandDetailsModel',
    // Notice the require syntax and the '.default'
    model: require('../models/oringAndGlandDetails').default,
  };

  const metricORingAndGlandDetailsModel = {
    name: 'metricORingAndGlandDetailsModel',
    // Notice the require syntax and the '.default'
    model: require('../models/metricOringAndGlandDetails').default,
  };

  const calculationTypeMasterModel = {
    name: 'calculationTypeMasterModel',
    // Notice the require syntax and the '.default'
    model: require('../models/calculationTypeMaster').default,
  };

  const calculationIdToleranceModel = {
    name: 'calculationIdToleranceModel',
    // Notice the require syntax and the '.default'
    model: require('../models/calculationIdTolerance').default,
  };

  const metricCalculationIdToleranceModel = {
    name: 'metricCalculationIdToleranceModel',
    // Notice the require syntax and the '.default'
    model: require('../models/metricCalculationIdTolerance').default,
  };

  const as568aRectangleSeriesModel = {
    name: 'as568aRectangleSeriesModel',
    // Notice the require syntax and the '.default'
    model: require('../models/as568aRectangleSeries').default,
  };

  const as568aDovetailSeriesModel = {
    name: 'as568aDovetailSeriesModel',
    // Notice the require syntax and the '.default'
    model: require('../models/as568aDovetailSeries').default,
  };

  const as568aHalfDovetailSeriesModel = {
    name: 'as568aHalfDovetailSeriesModel',
    // Notice the require syntax and the '.default'
    model: require('../models/as568aHalfDovetailSeries').default,
  };

  const metricAs568aRectangleSeriesModel = {
    name: 'metricAs568aRectangleSeriesModel',
    // Notice the require syntax and the '.default'
    model: require('../models/metricAs568aRectangleSeries').default,
  };

  const metricAs568aDovetailSeriesModel = {
    name: 'metricAs568aDovetailSeriesModel',
    // Notice the require syntax and the '.default'
    model: require('../models/metricAs568aDovetailSeries').default,
  };

  const metricAs568aHalfDovetailSeriesModel = {
    name: 'metricAs568aHalfDovetailSeriesModel',
    // Notice the require syntax and the '.default'
    model: require('../models/metricAs568aHalfDovetailSeries').default,
  };

  // WrAr Models

  const wrArCalculationTypeMaster = {
    name: 'wrArCalculationTypeMaster',
    // Notice the require syntax and the '.default'
    model: require('../models/wrArCalculationTypeMaster').default,
  };

  const wrArCompositeMatlCheck = {
    name: 'wrArCompositeMatlCheck',
    // Notice the require syntax and the '.default'
    model: require('../models/wrArCompositeMatlCheck').default,
  };

  const wrArMetricCompositeMatlCheck = {
    name: 'wrArMetricCompositeMatlCheck',
    // Notice the require syntax and the '.default'
    model: require('../models/wrArMetricCompositeMatlCheck').default,
  };

  const wrArMaterial = {
    name: 'wrArMaterial',
    // Notice the require syntax and the '.default'
    model: require('../models/wrArMaterial').default,
  };

  const wrArMetricMaterial = {
    name: 'wrArMetricMaterial',
    // Notice the require syntax and the '.default'
    model: require('../models/wrArMetricMaterial').default,
  };

  const wrArPressInInterference = {
    name: 'wrArPressInInterference',
    // Notice the require syntax and the '.default'
    model: require('../models/wrArPressInInterference').default,
  };

  const wrArPressInCTECalculationMaster = {
    name: 'wrArPressInCTECalculationMaster',
    // Notice the require syntax and the '.default'
    model: require('../models/wrArPressInCTECalculationMaster').default,
  };

  const wrArCTECalcs = {
    name: 'wrArCTECalcs',
    // Notice the require syntax and the '.default'
    model: require('../models/wrArCTECalcs').default,
  };

  const wrArMetricCTECalcs = {
    name: 'wrArMetricCTECalcs',
    // Notice the require syntax and the '.default'
    model: require('../models/wrArMetricCTECalcs').default,
  };


  // It returns the agenda instance because it's needed in the subsequent loaders
  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [
      personModel,
      oringAndGlandDetailsModel,
      metricORingAndGlandDetailsModel,
      calculationTypeMasterModel,
      calculationIdToleranceModel,
      metricCalculationIdToleranceModel,
      as568aRectangleSeriesModel,
      as568aDovetailSeriesModel,
      as568aHalfDovetailSeriesModel,
      metricAs568aRectangleSeriesModel,
      metricAs568aDovetailSeriesModel,
      metricAs568aHalfDovetailSeriesModel,
      wrArCalculationTypeMaster,
      wrArCompositeMatlCheck,
      wrArMetricCompositeMatlCheck,
      wrArMaterial,
      wrArMetricMaterial,
      wrArPressInInterference,
      wrArPressInCTECalculationMaster,
      wrArCTECalcs,
      wrArMetricCTECalcs
    ],
  });
  Logger.info('✌️ Dependency Injector loaded');

  // // await jobsLoader({ agenda });
  Logger.info('✌️ Jobs loaded');

  // TODO:
  // load express
  // await expressLoader({ app: expressApp });
  expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
