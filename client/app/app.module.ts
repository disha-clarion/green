// core imports
import { APP_INITIALIZER, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// third party imports
import { CookieService } from "ngx-cookie-service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";

// application imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from "./app.config.service";
import { ErrorInterceptor } from "./helpers/interceptors/error.interceptor";
import { JwtInterceptor } from "./helpers/interceptors/jwt.interceptor";
import { SpinnerInterceptor } from "./helpers/interceptors/spinner.interceptor";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "./shared/shared.module";
import { GlobalErrorHandler } from "./shared/services/global-error-handler";

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    },
    // processes all errors
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    // interceptor for HTTP errors
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
