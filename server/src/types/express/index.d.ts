import { Document, Model } from 'mongoose';
import { IPerson } from '../../interfaces/IPerson';
import { IOringAndGlandDetails } from "../../interfaces/IOringAndGlandDetails";
import { IMetricOringAndGlandDetails } from "../../interfaces/IMetricOringAndGlandDetails";
import { IORingSizes } from "../../interfaces/IORingSizes";
import { ICalculationTypeMaster } from "../../interfaces/ICalculationTypeMaster";
import { ICalculationIdTolerance } from "../../interfaces/ICalculationIdTolerance";
import { IMetricCalculationIdTolerance } from "../../interfaces/IMetricCalculationIdTolerance";
import { IAs568aRectangleSeries } from "../../interfaces/IAs568aRectangleSeries";
import { IAs568aDovetailSeries } from "../../interfaces/IAs568aDovetailSeries";
import { IAs568aHalfDovetailSeries } from "../../interfaces/IAs568aHalfDovetailSeries";
import { IMetricAs568aRectangleSeries } from "../../interfaces/IMetricAs568aRectangleSeries";
import { IMetricAs568aDovetailSeries } from "../../interfaces/IMetricAs568aDovetailSeries";
import { IMetricAs568aHalfDovetailSeries } from "../../interfaces/IMetricAs568aHalfDovetailSeries";
import { IWrArCalculationTypeMaster } from '../../interfaces/IWrArCalculationTypeMaster';
import { IWrArCompositeMatlCheck } from '../../interfaces/IWrArCompositeMatlCheck';
import { IWrArMaterial } from '../../interfaces/IWrArMaterial';
import { IWrArPressInInterference } from '../../interfaces/IWrArPressInInterference';
import { IWrArCTECalcs } from '../../interfaces/IWrArCTECalcs';
import { IWrArPressInCTECalculationMaster } from '../../interfaces/IWrArPressInCTECalculationMaster';

declare global {
  namespace Express {
    export interface Request {
      currentUser: Document;
    }
  }

  namespace Models {
    export type UserModel = Model<Document>;
    export type OringAndGlandDetailsModel = Model<IOringAndGlandDetails & Document>;
    export type MetricORingAndGlandDetailsModel = Model<IMetricOringAndGlandDetails & Document>;
    export type ORingSizes = Model<IORingSizes & Document>;
    export type CalculationTypeMasterModel = Model<ICalculationTypeMaster & Document>;
    export type CalculationIdToleranceModel = Model<ICalculationIdTolerance & Document>;
    export type MetricCalculationIdToleranceModel = Model<IMetricCalculationIdTolerance & Document>;
    export type As568aRectangleSeriesModel = Model<IAs568aRectangleSeries & Document>;
    export type As568aDovetailSeriesModel = Model<IAs568aDovetailSeries & Document>;
    export type As568aHalfDovetailSeriesModel = Model<IAs568aHalfDovetailSeries & Document>;
    export type MetricAs568aRectangleSeriesModel = Model<IMetricAs568aRectangleSeries & Document>;
    export type MetricAs568aDovetailSeriesModel = Model<IMetricAs568aDovetailSeries & Document>;
    export type MetricAs568aHalfDovetailSeriesModel = Model<IMetricAs568aHalfDovetailSeries & Document>;
    export type PersonModel = Model<IPerson & Document>;
    // WrAr models
    export type WrArCompositeMatlCheck = Model<IWrArCompositeMatlCheck & Document>;
    export type WrArMetricCompositeMatlCheck = Model<IWrArCompositeMatlCheck & Document>;
    export type WrArMaterial = Model<IWrArMaterial & Document>;
    export type WrArMetricMaterial = Model<IWrArMaterial & Document>;
    export type WrArCalculationTypeMaster = Model<IWrArCalculationTypeMaster & Document>;
    export type WrArPressInInterference = Model<IWrArPressInInterference & Document>;
    export type WrArPressInCTECalculationMaster = Model<IWrArPressInCTECalculationMaster & Document>;
    export type WrArCTECalcs = Model<IWrArCTECalcs & Document>;
    export type WrArMetricCTECalcs = Model<IWrArCTECalcs & Document>;
  }
}
