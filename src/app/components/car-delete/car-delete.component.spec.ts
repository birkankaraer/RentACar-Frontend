import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDeleteComponent } from './car-delete.component';

describe('CarDeleteComponent', () => {
  let component: CarDeleteComponent;
  let fixture: ComponentFixture<CarDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarDeleteComponent]
    });
    fixture = TestBed.createComponent(CarDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
