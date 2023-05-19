import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderetudiantComponent } from './calenderetudiant.component';

describe('CalenderetudiantComponent', () => {
  let component: CalenderetudiantComponent;
  let fixture: ComponentFixture<CalenderetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
