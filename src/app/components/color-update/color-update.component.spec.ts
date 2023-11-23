import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorUpdateComponent } from './color-update.component';

describe('ColorUpdateComponent', () => {
  let component: ColorUpdateComponent;
  let fixture: ComponentFixture<ColorUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorUpdateComponent]
    });
    fixture = TestBed.createComponent(ColorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
