import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInscriComponent } from './test-inscri.component';

describe('TestInscriComponent', () => {
  let component: TestInscriComponent;
  let fixture: ComponentFixture<TestInscriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInscriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestInscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
