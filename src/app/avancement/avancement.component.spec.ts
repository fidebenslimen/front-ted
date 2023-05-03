import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancementComponent } from './avancement.component';

describe('AvancementComponent', () => {
  let component: AvancementComponent;
  let fixture: ComponentFixture<AvancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvancementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
