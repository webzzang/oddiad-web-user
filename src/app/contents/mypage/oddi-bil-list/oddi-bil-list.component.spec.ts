import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddiBilListComponent } from './oddi-bil-list.component';

describe('OddiBilListComponent', () => {
  let component: OddiBilListComponent;
  let fixture: ComponentFixture<OddiBilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddiBilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddiBilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
