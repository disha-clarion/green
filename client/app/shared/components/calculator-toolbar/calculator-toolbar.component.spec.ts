import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorToolbarComponent } from './calculator-toolbar.component';

describe('CalculatorToolbarComponent', () => {
  let component: CalculatorToolbarComponent;
  let fixture: ComponentFixture<CalculatorToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
