import { IPerson } from '../interfaces/IPerson';
import mongoose from 'mongoose';

const Persons = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },

    lname: {
      type: String,
      lowercase: true,
      index: true,
    },
  });

export default mongoose.model<IPerson & mongoose.Document>('persons', Persons);
