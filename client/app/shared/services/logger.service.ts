import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { LogModel } from "../../models/log.model";
import { AppConfig } from '../../app.config.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  baseUrl = AppConfig.settings.env.api;

  constructor(private _http: HttpClient) {
  }

  log(body: LogModel) {
    return this._http.post(`${this.baseUrl}logger/log`, body);
  }
}
