import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent } from './gland-size-half-dovetail-gland-internal-vacuum-only.component';

describe('GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent', () => {
  let component: GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent;
  let fixture: ComponentFixture<GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
