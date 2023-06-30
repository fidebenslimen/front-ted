import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsStatComponent } from './admissions-stat.component';

describe('AdmissionsStatComponent', () => {
  let component: AdmissionsStatComponent;
  let fixture: ComponentFixture<AdmissionsStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionsStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionsStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
