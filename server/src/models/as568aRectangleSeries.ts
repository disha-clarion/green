import { IAs568aRectangleSeries } from '../interfaces/IAs568aRectangleSeries';
import mongoose, { Schema } from 'mongoose';

const As568aRectangleSeries = new mongoose.Schema(
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

export default mongoose.model<IAs568aRectangleSeries & mongoose.Document>('as568aRectangleSeries', As568aRectangleSeries, 'as568aRectangleSeries');