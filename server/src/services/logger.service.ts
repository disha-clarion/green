import { Service, Inject } from 'typedi';
import { ILogInputDTO, ILog } from '../interfaces/ILog';
import { LoggingLevels } from '../enums';

@Service()
export default class LoggerService {
    constructor(
        @Inject('logger') private logger
    ) { }

    public async log(log: ILogInputDTO): Promise<ILog> {
        switch (log.level) {
            case LoggingLevels.error:
                this.logger.error(log.message);
                break;
            case LoggingLevels.warn:
                this.logger.warn(log.message);
                break;
            case LoggingLevels.info:
                this.logger.info(log.message);
                break;
            case LoggingLevels.verbose:
                this.logger.verbose(log.message);
                break;
            case LoggingLevels.debug:
                this.logger.debug(log.message);
                break;
            case LoggingLevels.silly:
                this.logger.silly(log.message);
                break;
            default:
                break;
        }
        return log;
    }
}