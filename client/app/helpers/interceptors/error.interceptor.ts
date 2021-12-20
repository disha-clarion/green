// core imports
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

// third party imports
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";

// application imports
import { AlertModalComponent } from "../../shared/components/alert-modal/alert-modal.component";
import { HTTP_SPINNER } from '../../shared/helpers/constants';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    // private isRefreshing = false;
    // private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(
        private modalService: NgbModal,
        private spinner: NgxSpinnerService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.handle401Error();
                return new Observable<HttpEvent<any>>();
            }
            else {
                return throwError(err);
            }
        }));
    }

    // http error 401 handler
    private handle401Error() {
        return new Promise((resolve, reject) => {
            this.spinner.hide(HTTP_SPINNER);
            let options: NgbModalOptions = {};
            //     If true, the backdrop element will be created for a given modal.
            // Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.
            options.backdrop = 'static';
            // If true, the modal will be closed when Escape key is pressed
            options.keyboard = false;
            const modalRef = this.modalService.open(AlertModalComponent, options);
            modalRef.componentInstance.title = 'Alert!!';
            modalRef.componentInstance.message = 'Token expired, Please refresh the page.';
            modalRef.componentInstance.name = 'World';
        });
    }

    // private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    //     if (!this.isRefreshing) {
    //         this.isRefreshing = true;
    //         this.refreshTokenSubject.next(null);

    //         return this.authService.authenticate().pipe(first()).pipe(
    //             switchMap((authData: AuthModel) => {
    //                 this.isRefreshing = false;
    //                 this.refreshTokenSubject.next(authData.token);
    //                 return next.handle(this.addToken(request, authData.token));
    //             }));

    //     } else {
    //         return this.refreshTokenSubject.pipe(
    //             filter(token => token != null),
    //             take(1),
    //             switchMap(jwt => {
    //                 return next.handle(this.addToken(request, jwt));
    //             }));
    //     }
    // }

    // private addToken(request: HttpRequest<any>, token: string) {
    //     return request.clone({
    //         setHeaders: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     });
    // }
}