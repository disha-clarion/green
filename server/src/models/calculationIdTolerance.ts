import { ICalculationIdTolerance } from '../interfaces/ICalculationIdTolerance';
import mongoose from 'mongoose';

const CalculationIdTolerance = new mongoose.Schema(
  {
    _id: String,
    crossSectionMin: Number,
    crossSectionMax: Number,
    diameterMin: Number,
    diameterMax: Number,
    diameterTolerance: Number
  });

export default mongoose.model<ICalculationIdTolerance & mongoose.Document>('calculationIdTolerance', CalculationIdTolerance, 'calculationIdTolerance');