import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormTwoColumnLayoutComponent } from './dynamic-form-two-column-layout.component';

describe('DynamicFormTwoColumnLayoutComponent', () => {
  let component: DynamicFormTwoColumnLayoutComponent;
  let fixture: ComponentFixture<DynamicFormTwoColumnLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormTwoColumnLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormTwoColumnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
