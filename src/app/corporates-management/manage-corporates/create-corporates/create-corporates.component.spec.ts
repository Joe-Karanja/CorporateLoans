import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorporatesComponent } from './create-corporates.component';

describe('CreateCorporatesComponent', () => {
  let component: CreateCorporatesComponent;
  let fixture: ComponentFixture<CreateCorporatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCorporatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCorporatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
