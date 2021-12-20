import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureButtonComponent } from './temperature-button.component';

describe('TemperatureButtonComponent', () => {
  let component: TemperatureButtonComponent;
  let fixture: ComponentFixture<TemperatureButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
