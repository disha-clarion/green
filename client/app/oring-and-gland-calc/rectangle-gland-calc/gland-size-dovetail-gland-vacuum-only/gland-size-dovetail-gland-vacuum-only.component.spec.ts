import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlandSizeDovetailGlandVacuumOnlyComponent } from './gland-size-dovetail-gland-vacuum-only.component';

describe('GlandSizeDovetailGlandVacuumOnlyComponent', () => {
  let component: GlandSizeDovetailGlandVacuumOnlyComponent;
  let fixture: ComponentFixture<GlandSizeDovetailGlandVacuumOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlandSizeDovetailGlandVacuumOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlandSizeDovetailGlandVacuumOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
