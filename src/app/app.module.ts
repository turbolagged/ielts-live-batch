import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionsComponent } from './components/sections/sections.component';
import { CourseInstructorsComponent } from './components/sections/course-instructors/course-instructors.component';
import { SharedModule } from './shared/shared.module';
import { CourseFeaturesComponent } from './components/sections/course-features/course-features.component';
import { PointersComponent } from './components/sections/pointers/pointers.component';
import { ClassRoutineComponent } from './components/sections/class-routine/class-routine.component';
import { TestimonialsComponent } from './components/sections/testimonials/testimonials.component';
import { AboutComponent } from './components/sections/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    SectionsComponent,
    CourseInstructorsComponent,
    CourseFeaturesComponent,
    PointersComponent,
    ClassRoutineComponent,
    TestimonialsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
