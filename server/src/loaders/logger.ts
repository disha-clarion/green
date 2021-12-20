import winston from 'winston';
import DailyRotateFile = require("winston-daily-rotate-file");
import config from '../config';

// constant daily rotate transport
const dailyTransport = new DailyRotateFile(config.logFile);

const transports = [];
if (process.env.NODE_ENV !== 'development') {
  // production log
  transports.push(
    new winston.transports.Console()
  );
  // file logger
  transports.push(dailyTransport);
} else {
  // other logs like for srtaging, dev 
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
      )
    })
  );

  // file logger
  transports.push(dailyTransport);
}

const LoggerInstance = winston.createLogger({
  level: config.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports
});

export default LoggerInstance;