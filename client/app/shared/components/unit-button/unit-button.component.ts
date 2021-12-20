// core imorts
import { Component, OnInit } from '@angular/core';

// application imports
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { HelperService } from '../../services/helper.service';
import { UnitButtonService } from "./unit-button.service";
import { CalculatorToolbarService } from "../calculator-toolbar/calculator-toolbar.service";
import { ActionType } from '../../helpers/constants';

@Component({
  selector: 'unit-button',
  templateUrl: './unit-button.component.html',
  styleUrls: ['./unit-button.component.css']
})
export class UnitButtonComponent implements OnInit {
  units: SwitchButtonModel[];
  currentUnit: SwitchButtonModel;
  previousUnit: SwitchButtonModel;

  constructor(
    private helperService: HelperService,
    private unitButtonService: UnitButtonService,
    private calculatorToolbarService: CalculatorToolbarService) {
    this.onPaste();
  }

  ngOnInit(): void {
    // get units 
    this.units = this.helperService.getUnits();
    // get current active unit
    const activeUnitIndex = this.units.findIndex(u => u.isActive === true);
    if (activeUnitIndex > -1) {
      this.currentUnit = { ...this.units[activeUnitIndex] };
      this.previousUnit = { ...this.units[activeUnitIndex] };
    }
    else {
      // default selected unit
      this.currentUnit = { ...this.units[0] };
      this.previousUnit = { ...this.units[0] };
    }
  }

  // unit switch clicked handler
  onUnitSwitchClicked(event: SwitchButtonModel) {
    // reset action
    this.resetAction();
    // set previous 
    this.previousUnit = { ...this.currentUnit };
    // set changed value to current
    this.currentUnit = { ...event };
    if (this.previousUnit && this.previousUnit.id !== event.id) {
      this.unitButtonService.sendUnitValue(event);
    }
  }

  // onPaste bt click
  onPaste() {
    this.calculatorToolbarService.paste.subscribe((x: any) => {
      // reset action
      this.resetAction();
      if (x) {
        this.setActiveUnitOnPaste(x);
      }
    });
  }

  // set active unit switch based on calculated data stored in local storage
  setActiveUnitOnPaste(calculatedData: any) {
    if (this.units && this.units.length > 0 && calculatedData && calculatedData.unit) {
      const activeIndex = this.units.findIndex((u) => {
        return u.id === (+calculatedData.unit);
      });
      if (activeIndex > -1) {
        for (let index = 0; index < this.units.length; index++) {
          this.units[index].isActive = false;
        }
        this.units[activeIndex].isActive = true;
        // set action type
        this.units[activeIndex].actionType = ActionType.Paste;
        // set previous 
        this.previousUnit = { ...this.currentUnit };
        // set changed value to current
        this.currentUnit = { ...this.units[activeIndex] };
        // send unit change
        this.unitButtonService.sendUnitValue(this.units[activeIndex]);
      }
    }
  }

  resetAction() {
    // reset action
    for (let index = 0; index < this.units.length; index++) {
      this.units[index].actionType = 0;
    }
  }
}
