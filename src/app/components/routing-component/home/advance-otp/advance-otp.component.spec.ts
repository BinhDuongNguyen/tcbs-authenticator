import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceOtpComponent } from './advance-otp.component';

describe('AdvanceOtpComponent', () => {
  let component: AdvanceOtpComponent;
  let fixture: ComponentFixture<AdvanceOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
