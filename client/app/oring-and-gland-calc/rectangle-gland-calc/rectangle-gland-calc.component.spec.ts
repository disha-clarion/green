import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleGlandCalcComponent } from './rectangle-gland-calc.component';

describe('RectangleGlandCalcComponent', () => {
  let component: RectangleGlandCalcComponent;
  let fixture: ComponentFixture<RectangleGlandCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleGlandCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleGlandCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
