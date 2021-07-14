import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFnfComponent } from './employee-fnf.component';

describe('EmployeeFnfComponent', () => {
  let component: EmployeeFnfComponent;
  let fixture: ComponentFixture<EmployeeFnfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFnfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
