import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArWrCalcComponent } from './ar-wr-calc.component';

describe('ArWrCalcComponent', () => {
  let component: ArWrCalcComponent;
  let fixture: ComponentFixture<ArWrCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArWrCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArWrCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
