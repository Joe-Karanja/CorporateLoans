import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpLoansComponent } from './view-emp-loans.component';

describe('ViewEmpLoansComponent', () => {
  let component: ViewEmpLoansComponent;
  let fixture: ComponentFixture<ViewEmpLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
