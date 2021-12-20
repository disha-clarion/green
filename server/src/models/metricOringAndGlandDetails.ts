import { IMetricOringAndGlandDetails } from '../interfaces/IMetricOringAndGlandDetails';
import mongoose from 'mongoose';

const MetricOringAndGlandDetails = new mongoose.Schema(
  {
    _id: {
      type: String
    },
    dashSize: {
      type: Number
    },
    oringCrossSectionSize: {
      type: Number
    },
    oringCrossSectionTolerance: {
      type: Number
    },
    oringDiameterSize: {
      type: Number
    },
    oringDiameterTolerance: {
      type: Number
    },
    internalVacuumGlandIdSize: {
      type: Number
    },
    internalVacuumGlandIdTolerance: {
      type: Number
    },
    internalPressureGlandIdSize: {
      type: Number
    },
    internalPressureGlandIdTolerance: {
      type: Number
    },
    dovetailGlandClDiameterSize: {
      type: Number
    },
    dovetailGlandClDiameterTolerance: {
      type: Number
    }
  });

export default mongoose.model<IMetricOringAndGlandDetails & mongoose.Document>('metricOringAndGlandDetails', MetricOringAndGlandDetails, 'metricOringAndGlandDetails');