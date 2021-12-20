// Core imports
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// third party imports
import { Subscription } from 'rxjs';
import { filter } from "rxjs/operators";
import { CalculatorGroup } from '../../helpers/constants';
import { TabModel } from "../../../models/tab.model";

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.css']
})
export class TabNavComponent implements OnInit, OnDestroy {
  @Input() tabMenu: TabModel[] = [];
  chemrazURL: string;
  currrentCalculatorGroup = CalculatorGroup.ORingNGlandCalcs;
  isShowChemrazBtn = false;

  // subscription
  activatedRouteSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.chemrazURL = 'https://semi-chemraz.gtweed.com/';

    // get route data
    this.activatedRouteSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.activatedRoute.snapshot && this.activatedRoute.snapshot.data) {
        this.currrentCalculatorGroup = this.activatedRoute.snapshot.data.calculatorGroup;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {

  }

  redirectTo(redirectPath: string) {

  }
}
