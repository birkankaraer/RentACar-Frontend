import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUpdateComponent } from './car-update.component';

describe('CarUpdateComponent', () => {
  let component: CarUpdateComponent;
  let fixture: ComponentFixture<CarUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarUpdateComponent]
    });
    fixture = TestBed.createComponent(CarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
