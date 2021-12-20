import { Schema } from 'mongoose';

export interface IMetricAs568aDovetailSeries {
  _id: Schema.Types.ObjectId;
  glandName: String;
  as568aSeries: Number;
  oringCrossSectionNominal: Number;
  oringCrossSectionTolerance: Number;
  glandDepthNominal: Number;
  glandDepthTolerance: Number;
  glandWidthNominal: Number;
  glandWidthTolerance: Number;
  glandAngle: Number;
  bottomRadii: Number;
  topRadii: Number
}