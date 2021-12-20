import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ORingDovetailGlandVacuumOnlyComponent } from './o-ring-dovetail-gland-vacuum-only.component';

describe('ORingDovetailGlandVacuumOnlyComponent', () => {
  let component: ORingDovetailGlandVacuumOnlyComponent;
  let fixture: ComponentFixture<ORingDovetailGlandVacuumOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ORingDovetailGlandVacuumOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ORingDovetailGlandVacuumOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
