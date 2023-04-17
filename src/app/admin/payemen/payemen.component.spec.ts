import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayemenComponent } from './payemen.component';

describe('PayemenComponent', () => {
  let component: PayemenComponent;
  let fixture: ComponentFixture<PayemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayemenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
