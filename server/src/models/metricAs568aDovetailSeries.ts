import { IMetricAs568aDovetailSeries } from '../interfaces/IMetricAs568aDovetailSeries';
import mongoose, { Schema } from 'mongoose';

const MetricAs568aDovetailSeries = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    glandName: String,
    as568aSeries: Number,
    oringCrossSectionNominal: Number,
    oringCrossSectionTolerance: Number,
    glandDepthNominal: Number,
    glandDepthTolerance: Number,
    glandWidthNominal: Number,
    glandWidthTolerance: Number,
    glandAngle: Number,
    bottomRadii: Number,
    topRadii: Number
  });

export default mongoose.model<IMetricAs568aDovetailSeries & mongoose.Document>('metricAs568aDovetailSeries', MetricAs568aDovetailSeries, 'metricAs568aDovetailSeries');