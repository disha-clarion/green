import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-rules',
  templateUrl: './user-rules.component.html',
  styleUrls: ['./user-rules.component.css']
})
export class UserRulesComponent implements OnInit {
  collapsed: boolean = false;
  collapsedOring: boolean = false;
  collapsedSizing = false;

  constructor() { }

  ngOnInit(): void {
  }

}
