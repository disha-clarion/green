import 'reflect-metadata'; // We need this in order to use @Decorators
import config from './config';
import express from 'express';// load up the express framework 
import Logger from './loaders/logger';
import cors from 'cors';

async function startServer() {
  // create an instance of express to serve our end points
  const app = express();
  app.use(cors());
  // angular app set as start
  // app.use(express.static(process.cwd() + "/../dist/NGv09SMS/"));
  // app.get('/', (req, res) => {
  //   res.sendFile(process.cwd() + "/../dist/NGv09SMS/index.html")
  // });
  // angular app set as start
  const path = require('path');
  app.use(express.static(process.cwd() + '../../'));
  // app.get('/*', (req, res) => res.sendFile(process.cwd() + '../../index.html'));
  const root = path.join(process.cwd(), '../');
  // Send all other requests to the Angular app
  app.get('/', (req, res) => res.sendFile(root + 'index.html'));

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }
    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

startServer();
