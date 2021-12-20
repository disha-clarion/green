import { IWrArCTECalcs } from '../interfaces/IWrArCTECalcs';
import mongoose from 'mongoose';

const WrArMetricCTECalcs = new mongoose.Schema({  
  calType: String,
  compositeMaterials: [{
    id:Number,
    materialName: String,
    temperatures: [{
      temperature: Number,
      idCTE: Number,
      odCTE: Number,
      oalCTE: Number,
      cxCTE: Number
    }]
  }
  ]
});

export default mongoose.model<IWrArCTECalcs & mongoose.Document>('wrArMetricCTECalcs', WrArMetricCTECalcs, 'wrArMetricCTECalcs');
