import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ORingHalfDovetailGlandInternalVacuumOnlyComponent } from './o-ring-half-dovetail-gland-internal-vacuum-only.component';

describe('ORingHalfDovetailGlandInternalVacuumOnlyComponent', () => {
  let component: ORingHalfDovetailGlandInternalVacuumOnlyComponent;
  let fixture: ComponentFixture<ORingHalfDovetailGlandInternalVacuumOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ORingHalfDovetailGlandInternalVacuumOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ORingHalfDovetailGlandInternalVacuumOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
