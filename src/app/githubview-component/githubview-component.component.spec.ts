import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubviewComponentComponent } from './githubview-component.component';

describe('GithubviewComponentComponent', () => {
  let component: GithubviewComponentComponent;
  let fixture: ComponentFixture<GithubviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubviewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
