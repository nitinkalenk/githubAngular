import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirnavigationComponent } from './dirnavigation.component';

describe('DirnavigationComponent', () => {
  let component: DirnavigationComponent;
  let fixture: ComponentFixture<DirnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
