import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDebitComponent } from './customer-debit.component';

describe('CustomerDebitComponent', () => {
  let component: CustomerDebitComponent;
  let fixture: ComponentFixture<CustomerDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
