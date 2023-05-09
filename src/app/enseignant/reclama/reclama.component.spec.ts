import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamaComponent } from './reclama.component';

describe('ReclamaComponent', () => {
  let component: ReclamaComponent;
  let fixture: ComponentFixture<ReclamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
