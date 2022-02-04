import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireViewComponent } from './inquire-view.component';

describe('InquireViewComponent', () => {
  let component: InquireViewComponent;
  let fixture: ComponentFixture<InquireViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquireViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
