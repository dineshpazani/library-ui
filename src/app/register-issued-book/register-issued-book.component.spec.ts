import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIssuedBookComponent } from './register-issued-book.component';

describe('RegisterIssuedBookComponent', () => {
  let component: RegisterIssuedBookComponent;
  let fixture: ComponentFixture<RegisterIssuedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterIssuedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterIssuedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
