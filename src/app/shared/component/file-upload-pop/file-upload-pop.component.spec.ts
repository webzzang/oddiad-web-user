import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadPopComponent } from './file-upload-pop.component';

describe('FileUploadPopComponent', () => {
  let component: FileUploadPopComponent;
  let fixture: ComponentFixture<FileUploadPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
