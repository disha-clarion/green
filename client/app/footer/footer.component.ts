import { Component, Input, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() isShowAppVersion = false;
  public version: string = environment.appVersion;
  currentYear = (new Date()).getFullYear();
  constructor() { }

  ngOnInit(): void {
  }
}
