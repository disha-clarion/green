// core imports
import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

// third party imports
import { filter, first } from 'rxjs/operators';
import { Subscription, throwError } from 'rxjs';

// application imports
import { AppConfig } from './app.config.service';
import { AuthModel } from "./models/auth.model";
import { MaterialChoiceModel } from './models/material-choice.model';
import { AuthService } from "./shared/services/auth.service";
import { MaterialChoiceService } from "./shared/services/material-choice.service";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CalculatorGroup } from './shared/helpers/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  title = '';
  authData: AuthModel;
  isShowAppVersion = false;
  calculatorGroup = 0;
  // subscription
  authDataSubscription: Subscription;
  activatedRouteSubscription: Subscription;

  constructor(
    private readonly titleService: Title,
    private readonly authService: AuthService,
    private readonly materialChoiceService: MaterialChoiceService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {    
    this.authDataSubscription = this.authService.authData.subscribe(x => this.authData = x);

    // get route data
    this.activatedRouteSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.calculatorGroup = 0;
      if (this.activatedRoute.snapshot.firstChild && this.activatedRoute.snapshot.firstChild.data) {
        this.calculatorGroup = this.activatedRoute.snapshot.firstChild.data.calculatorGroup;
        if (this.calculatorGroup === CalculatorGroup.WrArCalcs) {
          this.isShowAppVersion = true;
        }
        this.setTitle();
      }
    });
  }

  ngOnInit(): void {
    this.setAuth();
    // get material choice
    this.getMaterialChoice();
  }

  // set browser title
  public setTitle() {
    if (this.calculatorGroup === CalculatorGroup.WrArCalcs) {
      this.titleService.setTitle(AppConfig.settings.app.wrArTitle);
    }
    else {
      this.titleService.setTitle(AppConfig.settings.app.title);
    }
  }

  // method to get authentication token and store it into cookies
  setAuth() {
    this.authService.authenticate().pipe(first())
      .subscribe(r => r);
  }

  // get material choice
  getMaterialChoice() {
    this.materialChoiceService.getMaterialChoice().subscribe((resp: MaterialChoiceModel[]) => {
      this.materialChoiceService.sendMaterialChoiceList(resp);
    });
  }

  ngOnDestroy(): void {
    if (this.authDataSubscription) {
      this.authDataSubscription.unsubscribe();
    }
  }
}
