import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureButtonComponent } from './measure-button.component';

describe('MeasureButtonComponent', () => {
  let component: MeasureButtonComponent;
  let fixture: ComponentFixture<MeasureButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasureButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
