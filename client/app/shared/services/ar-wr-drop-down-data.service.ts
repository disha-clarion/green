import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AppConfig } from "../../app.config.service";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArWrDropDownDataService {
  private baseUrl = AppConfig.settings.env.api;

  // properties for dropdown items
  private readonly dropdownItemsSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  readonly dropdownItems$ = this.dropdownItemsSubject.asObservable();

  constructor(private readonly _http: HttpClient) { }

  private get dropdownItems(): any {
    return this.dropdownItemsSubject.getValue();
  }

  private set dropdownItems(val: any) {
    this.dropdownItemsSubject.next(val);
  }

  getCurrentDropdownItems() {
    return this.dropdownItems;
  }

  sendDropdownItems(val: any) {
    this.dropdownItems = val;
  }

  getDropdownsItemsByKey(key: string): any[] {
    if (this.dropdownItems && key) {
      return this.dropdownItems[key];
    }
    else {
      return [];
    }
  }

  getDropdownItems() {
    return this._http.get(`${this.baseUrl}wrar/getdropdownitems`);
  }
}
