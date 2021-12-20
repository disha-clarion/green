// core imorts
import { Component, Input, OnInit } from '@angular/core';

// application imports
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { HelperService } from '../../services/helper.service';
import { CalculatorToolbarService } from "../calculator-toolbar/calculator-toolbar.service";
import { ActionType } from '../../helpers/constants';
import { UnitButtonService } from "../../components/unit-button/unit-button.service";

@Component({
  selector: 'measure-button',
  templateUrl: './measure-button.component.html',
  styleUrls: ['./measure-button.component.css']
})
export class MeasureButtonComponent implements OnInit {
  _defaultMeasure: SwitchButtonModel;
  get defaultMeasure(): SwitchButtonModel {
    return this._defaultMeasure;
  }
  @Input() set defaultMeasure(value: SwitchButtonModel) {
    if (value) {
      this._defaultMeasure = value;
      this.setActiveSwitchButton(this._defaultMeasure);
    }
  }
  measures: SwitchButtonModel[];
  currentMeasure: SwitchButtonModel;
  previousMeasure: SwitchButtonModel;

  constructor(
    private helperService: HelperService,
    private unitButtonService: UnitButtonService,
    private calculatorToolbarService: CalculatorToolbarService
  ) { }

  ngOnInit(): void {
    // get measures 
    this.measures = this.helperService.getMeasures();
    // get current active unit
    const activeMeasureIndex = this.measures.findIndex(u => u.isActive === true);
    if (activeMeasureIndex > -1) {
      this.currentMeasure = { ...this.measures[activeMeasureIndex] };
      this.previousMeasure = { ...this.measures[activeMeasureIndex] };
    }
    else {
      // default selected unit
      this.currentMeasure = { ...this.measures[0] };
      this.previousMeasure = { ...this.measures[0] };
    }
  }

  // unit switch clicked handler
  onMeasureSwitchClicked(event: SwitchButtonModel) {
    // reset action
    this.resetAction();
    // set previous 
    this.previousMeasure = { ...this.currentMeasure };
    // set changed value to current
    this.currentMeasure = { ...event };
    if (this.previousMeasure && this.previousMeasure.id !== event.id) {
      // TODO: 
      this.unitButtonService.sendUnitValue(event);
    }
  }

  // onPaste bt click
  // onPaste() {
  //   this.calculatorToolbarService.paste.subscribe((x: any) => {
  //     // reset action
  //     this.resetAction();
  //     if (x) {
  //       this.setActiveMeasureOnPaste(x);
  //     }
  //   });
  // }

  // set active unit switch based on calculated data stored in local storage
  setActiveMeasureOnPaste(calculatedData: any) {
    if (this.measures && this.measures.length > 0 && calculatedData && calculatedData.unit) {
      const activeIndex = this.measures.findIndex((u) => {
        return u.id === (+calculatedData.unit);
      });
      if (activeIndex > -1) {
        for (let index = 0; index < this.measures.length; index++) {
          this.measures[index].isActive = false;
        }
        this.measures[activeIndex].isActive = true;
        // set action type
        this.measures[activeIndex].actionType = ActionType.Paste;
        // set previous 
        this.previousMeasure = { ...this.currentMeasure };
        // set changed value to current
        this.currentMeasure = { ...this.measures[activeIndex] };
        // send unit change
        this.unitButtonService.sendUnitValue(this.measures[activeIndex]);
      }
    }
  }

  setActiveSwitchButton(switchButton: SwitchButtonModel) {
    // get measures 
    this.measures = this.helperService.getMeasures();
    const activeIndex = this.measures.findIndex((u) => {
      return u.id === (+switchButton.id);
    });
    if (activeIndex > -1) {
      for (let index = 0; index < this.measures.length; index++) {
        this.measures[index].isActive = false;
      }
      this.measures[activeIndex].isActive = true;
      // set previous 
      this.previousMeasure = { ...this.currentMeasure };
      // set changed value to current
      this.currentMeasure = { ...this.measures[activeIndex] };
    }
  }

  resetAction() {
    // reset action
    for (let index = 0; index < this.measures.length; index++) {
      this.measures[index].actionType = 0;
    }
  }
}
