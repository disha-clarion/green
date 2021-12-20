import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalculatorToolbarService {

  // paste event for copy and paste event
  paste: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
