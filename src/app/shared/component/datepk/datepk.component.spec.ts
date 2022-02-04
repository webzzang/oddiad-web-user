import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepkComponent } from './datepk.component';

describe('DatepkComponent', () => {
  let component: DatepkComponent;
  let fixture: ComponentFixture<DatepkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
