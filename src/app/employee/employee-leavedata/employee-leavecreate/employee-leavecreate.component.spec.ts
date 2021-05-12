import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeavecreateComponent } from './employee-leavecreate.component';

describe('EmployeeLeavecreateComponent', () => {
  let component: EmployeeLeavecreateComponent;
  let fixture: ComponentFixture<EmployeeLeavecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeavecreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeavecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
