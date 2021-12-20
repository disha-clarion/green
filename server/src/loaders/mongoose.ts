import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
  // const connection = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true });
  // mongoose connection object
  // install npm i ts-mongoose mongoose @types/mongoose
  const connection = await mongoose.connect(
    config.databaseURL,
    {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

  return connection.connection.db;
};
