// core imports
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

// third party imports
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs/internal/Observable';
import { catchError, finalize, tap } from 'rxjs/operators';
import { HTTP_SPINNER } from "../../shared/helpers/constants";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    count = 0;

    constructor(private spinner: NgxSpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show(HTTP_SPINNER);

        this.count++;

        return next.handle(request).pipe(tap(
            event => console.log(event),
            // error => console.log(error)
        ), finalize(() => {
            this.count--;
            if (this.count == 0) {
                this.spinner.hide(HTTP_SPINNER);
            };
        }));
    }
}