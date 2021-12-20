// core imports
import { Component, OnInit, Input } from '@angular/core';

// third party import
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngb-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }
}
