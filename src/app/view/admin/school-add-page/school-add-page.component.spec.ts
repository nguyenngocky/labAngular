import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAddPageComponent } from './school-add-page.component';

describe('SchoolAddPageComponent', () => {
  let component: SchoolAddPageComponent;
  let fixture: ComponentFixture<SchoolAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
