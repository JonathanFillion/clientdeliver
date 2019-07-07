import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayerLineComponent } from './product-displayer-line.component';

describe('ProductDisplayerLineComponent', () => {
  let component: ProductDisplayerLineComponent;
  let fixture: ComponentFixture<ProductDisplayerLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDisplayerLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayerLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
