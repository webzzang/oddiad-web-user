import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsLoginComponent } from './sns-login.component';

describe('SnsLoginComponent', () => {
  let component: SnsLoginComponent;
  let fixture: ComponentFixture<SnsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
