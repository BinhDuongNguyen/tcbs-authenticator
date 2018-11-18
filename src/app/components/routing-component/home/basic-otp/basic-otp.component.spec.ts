import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOtpComponent } from './basic-otp.component';

describe('BasicOtpComponent', () => {
  let component: BasicOtpComponent;
  let fixture: ComponentFixture<BasicOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
