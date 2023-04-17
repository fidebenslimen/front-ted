import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityReportComponent } from './university-report.component';

describe('UniversityReportComponent', () => {
  let component: UniversityReportComponent;
  let fixture: ComponentFixture<UniversityReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
