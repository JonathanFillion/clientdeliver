import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesDisplayerComponent } from './messages-displayer.component';

describe('MessagesDisplayerComponent', () => {
  let component: MessagesDisplayerComponent;
  let fixture: ComponentFixture<MessagesDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
