import { IAs568aDovetailSeries } from '../interfaces/IAs568aDovetailSeries';
import mongoose, { Schema } from 'mongoose';

const As568aDovetailSeries = new mongoose.Schema(
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

export default mongoose.model<IAs568aDovetailSeries & mongoose.Document>('as568aDovetailSeries', As568aDovetailSeries, 'as568aDovetailSeries');