import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSizeDetailsComponent } from './dash-size-details.component';

describe('DashSizeDetailsComponent', () => {
  let component: DashSizeDetailsComponent;
  let fixture: ComponentFixture<DashSizeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSizeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSizeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
