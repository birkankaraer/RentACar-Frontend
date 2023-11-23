import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAddComponent } from './color-add.component';

describe('ColorAddComponent', () => {
  let component: ColorAddComponent;
  let fixture: ComponentFixture<ColorAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorAddComponent]
    });
    fixture = TestBed.createComponent(ColorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
