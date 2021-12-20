// core imports
import { Component, OnInit } from '@angular/core';

// application imports
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { HelperService } from '../../services/helper.service';
import { TemperatureButtonService } from "./temperature-button.service";
import { CalculatorToolbarService } from "../calculator-toolbar/calculator-toolbar.service";
import { ActionType } from '../../helpers/constants';

@Component({
  selector: 'temperature-button',
  templateUrl: './temperature-button.component.html',
  styleUrls: ['./temperature-button.component.css']
})
export class TemperatureButtonComponent implements OnInit {
  temperature: SwitchButtonModel[];
  currentTemperature: SwitchButtonModel;
  previousTemperature: SwitchButtonModel;

  // constructor
  constructor(
    private helperService: HelperService,
    private temperatureButtonService: TemperatureButtonService,
    private calculatorToolbarService: CalculatorToolbarService) {
    this.onPaste();
  }

  // oninit of component
  ngOnInit(): void {
    // temperature object
    this.temperature = this.helperService.getTemperature();
    // get current active unit
    const activeTemperatureIndex = this.temperature.findIndex(u => u.isActive === true);
    if (activeTemperatureIndex > -1) {
      this.currentTemperature = { ...this.temperature[activeTemperatureIndex] };
      this.previousTemperature = { ...this.temperature[activeTemperatureIndex] };
    }
    else {
      // default selected temperature
      this.currentTemperature = { ...this.temperature[0] };
      this.previousTemperature = { ...this.temperature[0] };
    }
  }

  // temperture switch clicked handler
  onTemperatureSwitchClicked(event: SwitchButtonModel) {
    // reset action
    this.resetAction();
    // set previous 
    this.previousTemperature = { ...this.currentTemperature };
    // set changed value to current
    this.currentTemperature = { ...event };
    if (this.previousTemperature && this.previousTemperature.id !== event.id) {
      this.temperatureButtonService.sendTemperatureValue(event);
    }
  }

  // onPaste bt click
  onPaste() {
    this.calculatorToolbarService.paste.subscribe((x: any) => {
      // reset action
      this.resetAction();
      if (x) {
        this.setActiveTemperatureOnPaste(x);
      }
    });
  }

  // set active unitTemp switch based on calculated data stored in local storage
  setActiveTemperatureOnPaste(calculatedData: any) {
    if (this.temperature && this.temperature.length > 0 && calculatedData && calculatedData.unitTemp) {
      const activeIndex = this.temperature.findIndex((u) => {
        return u.id === (+calculatedData.unitTemp);
      });
      if (activeIndex > -1) {
        for (let index = 0; index < this.temperature.length; index++) {
          this.temperature[index].isActive = false;
        }
        // set action type
        this.temperature[activeIndex].actionType = ActionType.Paste;
        // set active button
        this.temperature[activeIndex].isActive = true;
        // set previous 
        this.previousTemperature = { ...this.currentTemperature };
        // set changed value to current
        this.currentTemperature = { ...this.temperature[activeIndex] };
        // send unitTemp change
        this.temperatureButtonService.sendTemperatureValue(this.temperature[activeIndex]);
      }
    }
  }


  resetAction() {
    // reset action
    for (let index = 0; index < this.temperature.length; index++) {
      this.temperature[index].actionType = 0;
    }
  }
}
