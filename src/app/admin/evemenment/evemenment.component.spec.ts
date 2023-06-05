import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvemenmentComponent } from './evemenment.component';

describe('EvemenmentComponent', () => {
  let component: EvemenmentComponent;
  let fixture: ComponentFixture<EvemenmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvemenmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvemenmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
