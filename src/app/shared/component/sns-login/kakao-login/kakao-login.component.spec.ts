import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakaoLoginComponent } from './kakao-login.component';

describe('KakaoLoginComponent', () => {
  let component: KakaoLoginComponent;
  let fixture: ComponentFixture<KakaoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakaoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakaoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
