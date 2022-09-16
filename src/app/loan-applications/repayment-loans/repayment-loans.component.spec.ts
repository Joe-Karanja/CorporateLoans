import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentLoansComponent } from './repayment-loans.component';

describe('RepaymentLoansComponent', () => {
  let component: RepaymentLoansComponent;
  let fixture: ComponentFixture<RepaymentLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepaymentLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepaymentLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
