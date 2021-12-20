import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAppConfig } from './app-config.model';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  private readonly httpClient: HttpClient;
  static settings: IAppConfig;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }
  
  load() {
    // let jsonFile = `assets/config/config.${environment.name}.json`;
    // if (!environment.name || (environment.name && environment.name.toLowerCase() === 'dev')) {
    const jsonFile = `assets/config/config.json`;
    // }

    return new Promise<void>((resolve, reject) => {
      this.httpClient.get(jsonFile).toPromise().then((response: IAppConfig) => {
        AppConfig.settings = response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
