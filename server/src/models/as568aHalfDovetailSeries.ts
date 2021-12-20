import { IAs568aHalfDovetailSeries } from '../interfaces/IAs568aHalfDovetailSeries';
import mongoose, { Schema } from 'mongoose';

const As568aHalfDovetailSeries = new mongoose.Schema(
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

export default mongoose.model<IAs568aHalfDovetailSeries & mongoose.Document>('as568aHalfDovetailSeries', As568aHalfDovetailSeries, 'as568aHalfDovetailSeries');