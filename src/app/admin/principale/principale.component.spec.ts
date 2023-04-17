import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaleComponent } from './principale.component';

describe('PrincipaleComponent', () => {
  let component: PrincipaleComponent;
  let fixture: ComponentFixture<PrincipaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
