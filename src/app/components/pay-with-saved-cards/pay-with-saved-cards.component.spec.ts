import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayWithSavedCardsComponent } from './pay-with-saved-cards.component';

describe('PayWithSavedCardsComponent', () => {
  let component: PayWithSavedCardsComponent;
  let fixture: ComponentFixture<PayWithSavedCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayWithSavedCardsComponent]
    });
    fixture = TestBed.createComponent(PayWithSavedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
