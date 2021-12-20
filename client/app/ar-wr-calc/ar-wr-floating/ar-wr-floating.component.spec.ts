import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArWrFloatingComponent } from './ar-wr-floating.component';

describe('ArWrFloatingComponent', () => {
  let component: ArWrFloatingComponent;
  let fixture: ComponentFixture<ArWrFloatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArWrFloatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArWrFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
