import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFeaturesComponent } from './course-features.component';

describe('CourseFeaturesComponent', () => {
  let component: CourseFeaturesComponent;
  let fixture: ComponentFixture<CourseFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
