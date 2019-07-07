import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutMainComponent } from './logout-main.component';

describe('LogoutMainComponent', () => {
  let component: LogoutMainComponent;
  let fixture: ComponentFixture<LogoutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
