import { IMetricAs568aHalfDovetailSeries } from '../interfaces/IMetricAs568aHalfDovetailSeries';
import mongoose, { Schema } from 'mongoose';

const MetricAs568aHalfDovetailSeries = new mongoose.Schema(
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

export default mongoose.model<IMetricAs568aHalfDovetailSeries & mongoose.Document>('metricAs568aHalfDovetailSeries', MetricAs568aHalfDovetailSeries, 'metricAs568aHalfDovetailSeries');