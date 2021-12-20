import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OringAndGlandCalcComponent } from './oring-and-gland-calc.component';

describe('OringAndGlandCalcComponent', () => {
  let component: OringAndGlandCalcComponent;
  let fixture: ComponentFixture<OringAndGlandCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OringAndGlandCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OringAndGlandCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
