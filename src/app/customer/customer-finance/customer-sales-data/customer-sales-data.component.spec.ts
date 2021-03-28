import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSalesDataComponent } from './customer-sales-data.component';

describe('CustomerSalesDataComponent', () => {
  let component: CustomerSalesDataComponent;
  let fixture: ComponentFixture<CustomerSalesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSalesDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSalesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
