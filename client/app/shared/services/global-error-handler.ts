// core imports
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// application imports
import { ErrorService } from './error.service';
import { ToastService } from '../components/toasts-container/toast-service';
import { LoggerService } from "../services/logger.service";
import { LogModel } from '../../models/log.model';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(
        private injector: Injector
    ) { }

    handleError(error: Error | HttpErrorResponse) {
        const genericMessage = "Something went wrong, please try again later !";
        const errorService = this.injector.get(ErrorService);
        const notifier = this.injector.get(ToastService);
        const logger = this.injector.get(LoggerService);

        let message: string = this.getErrorMessage(error);
        if (message) {
            // notifier
            notifier.showError(genericMessage);
            console.log(message);
            // notifier.showError(message);

            // log the error message to server logs(Winston Logger)
            // let logError: LogModel = new LogModel({ message: ` Client side error: ${message}`, level: 0 });
            let logError: LogModel = new LogModel({ message: ` Client side error: ${JSON.stringify(error)}`, level: 0 });
            logger.log(logError).subscribe(
                (data: any) => {
                    /*console.log("Successfully logged the error.");*/
                },
                (error: any) => {
                    const httpLogError = this.getErrorMessage(error);
                    // let httpLogErrObj: LogModel = new LogModel({ message: httpLogError, level: 0 });
                    let httpLogErrObj: LogModel = new LogModel({ message: JSON.stringify(error), level: 0 });
                    logger.log(httpLogErrObj);
                }
            )
        }
    }

    // helper to get the error message from error
    private getErrorMessage(error: Error | HttpErrorResponse): string {
        let errMessage = "";
        const errorService = this.injector.get(ErrorService);
        if (error instanceof HttpErrorResponse) {
            // Server error
            errMessage = errorService.getServerErrorMessage(error);
        } else {
            // Client Error
            errMessage = errorService.getClientErrorMessage(error);
        }
        return errMessage;
    }
}