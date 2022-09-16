import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelSuperAdminComponent } from './label-super-admin.component';

describe('LabelSuperAdminComponent', () => {
  let component: LabelSuperAdminComponent;
  let fixture: ComponentFixture<LabelSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelSuperAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
