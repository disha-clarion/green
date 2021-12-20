import { IWrArCompositeMatlCheck } from '../interfaces/IWrArCompositeMatlCheck';
import mongoose from 'mongoose';

const WrArMetricCompositeMatlCheck = new mongoose.Schema({
  _id: String,
  matlName: {
    type: String,
    default: ''
  },
  serviceStorageTemperatureAmbientMin: {
    type: Number,
    default: 0
  },
  serviceStorageTemperatureAmbientMax: {
    type: Number,
    default: 0
  },
  temperatures: [
    {
      temperature: {
        type: Number,
        default: ''
      },
      propertyAtTemperature: {
        compressiveModulus: Number,
        compressiveYield: Number
      },
      cteAtTemperature: {
        idCTE: Number,
        odCTE: Number,
        oalCTE: Number
      }
    }
  ]
});

export default mongoose.model<IWrArCompositeMatlCheck & mongoose.Document>('wrArMetricCompositeMatlCheck', WrArMetricCompositeMatlCheck, 'wrArMetricCompositeMatlCheck');
