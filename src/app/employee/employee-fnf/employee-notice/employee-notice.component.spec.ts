import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNoticeComponent } from './employee-notice.component';

describe('EmployeeNoticeComponent', () => {
  let component: EmployeeNoticeComponent;
  let fixture: ComponentFixture<EmployeeNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
