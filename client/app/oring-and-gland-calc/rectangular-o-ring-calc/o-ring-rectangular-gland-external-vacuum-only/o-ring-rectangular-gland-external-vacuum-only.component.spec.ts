import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ORingRectangularGlandExternalVacuumOnlyComponent } from './o-ring-rectangular-gland-external-vacuum-only.component';

describe('ORingRectangularGlandExternalVacuumOnlyComponent', () => {
  let component: ORingRectangularGlandExternalVacuumOnlyComponent;
  let fixture: ComponentFixture<ORingRectangularGlandExternalVacuumOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ORingRectangularGlandExternalVacuumOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ORingRectangularGlandExternalVacuumOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
