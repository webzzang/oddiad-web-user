import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonePaymentComponent } from './zone-payment.component';

describe('ZonePaymentComponent', () => {
  let component: ZonePaymentComponent;
  let fixture: ComponentFixture<ZonePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
