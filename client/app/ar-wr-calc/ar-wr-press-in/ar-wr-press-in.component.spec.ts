import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArWrPressInComponent } from './ar-wr-press-in.component';

describe('ArWrPressInComponent', () => {
  let component: ArWrPressInComponent;
  let fixture: ComponentFixture<ArWrPressInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArWrPressInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArWrPressInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
