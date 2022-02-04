import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwayPaymentComponent } from './subway-payment.component';

describe('SubwayPaymentComponent', () => {
  let component: SubwayPaymentComponent;
  let fixture: ComponentFixture<SubwayPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubwayPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwayPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
