import { IWrArMaterial } from '../interfaces/IWrArMaterial';
import mongoose, { Schema } from 'mongoose';

const WrArMaterial = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  materialName: String,
  poissonsRatio: Number,
  modulusPSI: Number,
  rotorCTE: Number,
  statorCTE: Number
});

export default mongoose.model<IWrArMaterial & mongoose.Document>('wrArMaterial', WrArMaterial, 'wrArMaterial');