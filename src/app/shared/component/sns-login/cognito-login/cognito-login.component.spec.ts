import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitoLoginComponent } from './cognito-login.component';

describe('CognitoLoginComponent', () => {
  let component: CognitoLoginComponent;
  let fixture: ComponentFixture<CognitoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CognitoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
