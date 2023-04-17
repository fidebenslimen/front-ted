import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreStaffEachComponent } from './nombre-staff-each.component';

describe('NombreStaffEachComponent', () => {
  let component: NombreStaffEachComponent;
  let fixture: ComponentFixture<NombreStaffEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreStaffEachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreStaffEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
