import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNavigationComponent } from './products-navigation.component';

describe('ProductsNavigationComponent', () => {
  let component: ProductsNavigationComponent;
  let fixture: ComponentFixture<ProductsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
