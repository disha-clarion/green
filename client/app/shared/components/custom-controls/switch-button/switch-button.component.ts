import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { SwitchButtonModel } from "../../../../models/switch-button.model";

@Component({
  selector: 'custom-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.css']
})
export class SwitchButtonComponent implements OnInit {
  @Input() switchOptions: SwitchButtonModel[];
  @Output() switchClicked: EventEmitter<SwitchButtonModel> = new EventEmitter<SwitchButtonModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchClicked(switchIndex: number) {
    this.setActive(switchIndex);
    this.switchClicked.emit(this.switchOptions[switchIndex]);
  }

  setActive(switchIndex: number) {
    for (let index = 0; index < this.switchOptions.length; index++) {
      this.switchOptions[index].isActive = false;
    }
    this.switchOptions[switchIndex].isActive = true;
  }
}
