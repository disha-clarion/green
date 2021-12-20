import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlandSizeRectangleInternalVacuumOnlyComponent } from './gland-size-rectangle-internal-vacuum-only.component';

describe('GlandSizeRectangleInternalVacuumOnlyComponent', () => {
  let component: GlandSizeRectangleInternalVacuumOnlyComponent;
  let fixture: ComponentFixture<GlandSizeRectangleInternalVacuumOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlandSizeRectangleInternalVacuumOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlandSizeRectangleInternalVacuumOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
