import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstructorsComponent } from './course-instructors.component';

describe('CourseInstructorsComponent', () => {
  let component: CourseInstructorsComponent;
  let fixture: ComponentFixture<CourseInstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInstructorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
