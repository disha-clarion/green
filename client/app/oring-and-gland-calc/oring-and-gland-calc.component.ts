// Core imports
import { Component, OnInit } from '@angular/core';

// Application imports
import { TabModel } from '../models/tab.model';

@Component({
  selector: 'app-oring-and-gland-calc',
  templateUrl: './oring-and-gland-calc.component.html',
  styleUrls: ['./oring-and-gland-calc.component.css']
})
export class OringAndGlandCalcComponent implements OnInit {
  // tabs
  oRingTabs: TabModel[] = [
    { linkLabel: "O-ring/GLAND Analysis Tool", rootModuleRoute: "evaluateoringglands", childrenModuleRoute: "/oringgland/evaluateoringglands/createRectangularORing", pathExactmatch: false },
    { linkLabel: "Gland Size Calculator", rootModuleRoute: "evaluateglandsizecalculatorsglands", childrenModuleRoute: "/oringgland/evaluateglandsizecalculatorsglands/createRectangleGland", pathExactmatch: false }];

  constructor() { }

  ngOnInit(): void {
  }
}
