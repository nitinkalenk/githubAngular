import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilenavigationComponent } from './filenavigation.component';

describe('FilenavigationComponent', () => {
  let component: FilenavigationComponent;
  let fixture: ComponentFixture<FilenavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilenavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
