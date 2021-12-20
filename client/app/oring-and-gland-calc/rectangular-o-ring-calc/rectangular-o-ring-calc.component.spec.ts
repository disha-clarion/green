import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularORingCalcComponent } from './rectangular-o-ring-calc.component';

describe('RectangularORingCalcComponent', () => {
  let component: RectangularORingCalcComponent;
  let fixture: ComponentFixture<RectangularORingCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangularORingCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangularORingCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
