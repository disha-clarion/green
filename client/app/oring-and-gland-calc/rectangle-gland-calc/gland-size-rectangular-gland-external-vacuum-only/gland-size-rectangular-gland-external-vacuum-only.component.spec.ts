import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlandSizeRectangularGlandExternalVacuumOnlyComponent } from './gland-size-rectangular-gland-external-vacuum-only.component';

describe('GlandSizeRectangularGlandExternalVacuumOnlyComponent', () => {
  let component: GlandSizeRectangularGlandExternalVacuumOnlyComponent;
  let fixture: ComponentFixture<GlandSizeRectangularGlandExternalVacuumOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlandSizeRectangularGlandExternalVacuumOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlandSizeRectangularGlandExternalVacuumOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
