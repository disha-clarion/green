import { IMetricCalculationIdTolerance } from '../interfaces/IMetricCalculationIdTolerance';
import mongoose from 'mongoose';

const MetricCalculationIdTolerance = new mongoose.Schema(
  {
    _id: String,
    crossSectionMin: Number,
    crossSectionMax: Number,
    diameterMin: Number,
    diameterMax: Number,
    diameterTolerance: Number
  });

export default mongoose.model<IMetricCalculationIdTolerance & mongoose.Document>('metricCalculationIdTolerance', MetricCalculationIdTolerance, 'metricCalculationIdTolerance');