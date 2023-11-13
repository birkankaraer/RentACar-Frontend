import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailComponent } from './cart-detail.component';

describe('CartDetailComponent', () => {
  let component: CartDetailComponent;
  let fixture: ComponentFixture<CartDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartDetailComponent]
    });
    fixture = TestBed.createComponent(CartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
