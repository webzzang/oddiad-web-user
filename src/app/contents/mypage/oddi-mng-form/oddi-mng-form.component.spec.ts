import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddiMngFormComponent } from './oddi-mng-form.component';

describe('OddiMngFormComponent', () => {
  let component: OddiMngFormComponent;
  let fixture: ComponentFixture<OddiMngFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddiMngFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddiMngFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
