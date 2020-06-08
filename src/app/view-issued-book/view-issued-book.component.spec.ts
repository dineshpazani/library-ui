import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIssuedBookComponent } from './view-issued-book.component';

describe('ViewIssuedBookComponent', () => {
  let component: ViewIssuedBookComponent;
  let fixture: ComponentFixture<ViewIssuedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIssuedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIssuedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
