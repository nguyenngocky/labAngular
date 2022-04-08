import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddPageComponent } from './project-add-page.component';

describe('ProjectAddPageComponent', () => {
  let component: ProjectAddPageComponent;
  let fixture: ComponentFixture<ProjectAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
