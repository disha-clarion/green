import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ORingInternalVacuumOnlyComponent } from './o-ring-internal-vacuum-only.component';

describe('ORingInternalVacuumOnlyComponent', () => {
  let component: ORingInternalVacuumOnlyComponent;
  let fixture: ComponentFixture<ORingInternalVacuumOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ORingInternalVacuumOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ORingInternalVacuumOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
