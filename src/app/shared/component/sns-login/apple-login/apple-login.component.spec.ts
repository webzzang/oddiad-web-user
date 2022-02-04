import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleLoginComponent } from './apple-login.component';

describe('AppleLoginComponent', () => {
  let component: AppleLoginComponent;
  let fixture: ComponentFixture<AppleLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
