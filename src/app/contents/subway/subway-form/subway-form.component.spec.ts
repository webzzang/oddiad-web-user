import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwayFormComponent } from './subway-form.component';

describe('SubwayFormComponent', () => {
  let component: SubwayFormComponent;
  let fixture: ComponentFixture<SubwayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubwayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
