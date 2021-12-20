import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitButtonComponent } from './unit-button.component';

describe('UnitButtonComponent', () => {
  let component: UnitButtonComponent;
  let fixture: ComponentFixture<UnitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
