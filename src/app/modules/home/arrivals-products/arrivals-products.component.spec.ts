import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalsProductsComponent } from './arrivals-products.component';

describe('ArrivalsProductsComponent', () => {
  let component: ArrivalsProductsComponent;
  let fixture: ComponentFixture<ArrivalsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivalsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
