import { Router } from 'express';
import auth from './routes/auth';
import agendash from './routes/agendash';
import person from './routes/person';
import loggerService from "./routes/logger.route";
import commonService from "./routes/common.route";
import oringglandanalysis from "./routes/O-Ring-gland-Analysis-cal.route";
import glandsizecalculator from "./routes/Gland-Size-cal.route";
import arwrcalculator from "./routes/ar-wr-cal.route";

// guaranteed to get dependencies
export default () => {
	// app routes
	const app = Router();
	loggerService(app);
	auth(app);
	agendash(app);
	person(app);
	commonService(app);
	oringglandanalysis(app);
	glandsizecalculator(app);
	arwrcalculator(app);
	return app;
}