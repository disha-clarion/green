import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AppConfig } from "../../app.config.service";
import { BehaviorSubject } from 'rxjs';
import { MaterialChoiceModel } from '../../models/material-choice.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialChoiceService {
  private baseUrl = AppConfig.settings.env.api;
  private readonly materialChoiceListSubject: BehaviorSubject<MaterialChoiceModel[]> = new BehaviorSubject<MaterialChoiceModel[]>([]);
  readonly materialchoiceList$ = this.materialChoiceListSubject.asObservable();

  constructor(private http: HttpClient) { }

  private get materialchoiceList(): MaterialChoiceModel[] {
    return this.materialChoiceListSubject.getValue();
  }

  private set materialchoiceList(val: MaterialChoiceModel[]) {
    this.materialChoiceListSubject.next(val);
  }

  getCurrentMaterialChoiceList() {
    return this.materialchoiceList;
  }

  sendMaterialChoiceList(val: MaterialChoiceModel[]) {
    this.materialchoiceList = [...val];
  }

  getMaterialChoice() {
    return this.http.get(`${this.baseUrl}common/materialchoice`);
  }
}
