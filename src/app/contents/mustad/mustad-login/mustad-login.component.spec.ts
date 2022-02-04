import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustadLoginComponent } from './mustad-login.component';

describe('MustadLoginComponent', () => {
  let component: MustadLoginComponent;
  let fixture: ComponentFixture<MustadLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustadLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustadLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
