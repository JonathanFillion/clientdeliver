import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDisplayerLineComponent } from './cart-displayer-line.component';

describe('CartDisplayerLineComponent', () => {
  let component: CartDisplayerLineComponent;
  let fixture: ComponentFixture<CartDisplayerLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDisplayerLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDisplayerLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
