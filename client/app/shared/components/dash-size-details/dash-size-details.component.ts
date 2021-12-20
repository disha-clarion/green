// core imports
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

// third party import
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

// application imports
import { Units, UnitsDecimalPlaces } from '../../helpers/constants';
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { UnitButtonService } from "../unit-button/unit-button.service";
import { DashSizeDetailsService } from "./dash-size-details.service";
import { ORingSizesModel } from '../../../models/oRingSizes.model';
import { ORingSizesDetailModel } from '../../../models/oRingSizesDetail.model';

@Component({
  selector: 'app-dash-size-details',
  templateUrl: './dash-size-details.component.html',
  styleUrls: ['./dash-size-details.component.css']
})
export class DashSizeDetailsComponent implements OnInit, OnDestroy {
  @Output() dashSizeRowClick: EventEmitter<ORingSizesDetailModel> = new EventEmitter<ORingSizesDetailModel>();
  fixedTo = 3;
  unitChangeSubscription: Subscription;
  dashSizeDetailSubscription: Subscription;
  dashSizes: ORingSizesModel;

  constructor(
    public activeModal: NgbActiveModal,
    private unitButtonService: UnitButtonService,
    private dashSizeDetailsService: DashSizeDetailsService) {
    this.unitChangeUpdateCalculator();
    this.dashSizeChange();
  }

  ngOnInit(): void {
    this.setFixedTo();
  }

  // set decimal places value
  setFixedTo() {
    if (this.unitButtonService.getCurrentUnitValue.id === Units.INCH) {
      this.fixedTo = UnitsDecimalPlaces.INCH;
    }
    else if (this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER) {
      this.fixedTo = UnitsDecimalPlaces.MILLI_METER;
    }
    else {
      this.fixedTo = UnitsDecimalPlaces.INCH;
    }
  }

  pad(n, length) {
    n = n * -1;
    var len = length - ('' + n).length;
    var a = (len > 0 ? new Array(++len).join('0') : '') + n;
    return '-' + a;
  }

  // unit change update output values handler
  unitChangeUpdateCalculator() {
    // unit switch button click/change subscription
    this.unitChangeSubscription = this.unitButtonService.unit$.subscribe((x: SwitchButtonModel) => {
      if (x) {
        this.setFixedTo();
      }
    });
  }

  // dash size update 
  dashSizeChange() {
    this.dashSizeDetailSubscription = this.dashSizeDetailsService.dashSizeDetail$.subscribe((x: ORingSizesModel) => {
      if (x) {
        this.dashSizes = x;
      }
    });
  }

  rowClick(data: ORingSizesDetailModel) {
    this.dashSizeRowClick.emit(data);
  }

  ngOnDestroy(): void {
    if (this.unitChangeSubscription) {
      this.unitChangeSubscription.unsubscribe();
    }
    if (this.dashSizeDetailSubscription) {
      this.dashSizeDetailSubscription.unsubscribe();
    }
  }
}
