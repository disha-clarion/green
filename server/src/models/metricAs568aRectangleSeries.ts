import { IMetricAs568aRectangleSeries } from '../interfaces/IMetricAs568aRectangleSeries';
import mongoose, { Schema } from 'mongoose';

const MetricAs568aRectangleSeries = new mongoose.Schema(
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
    bottomRadii: Number,
    topRadii: Number
  });

export default mongoose.model<IMetricAs568aRectangleSeries & mongoose.Document>('metricAs568aRectangleSeries', MetricAs568aRectangleSeries, 'metricAs568aRectangleSeries');