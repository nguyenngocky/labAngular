import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAddPageComponent } from './skill-add-page.component';

describe('SkillAddPageComponent', () => {
  let component: SkillAddPageComponent;
  let fixture: ComponentFixture<SkillAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
