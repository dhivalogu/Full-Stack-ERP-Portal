import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAgingComponent } from './customer-aging.component';

describe('CustomerAgingComponent', () => {
  let component: CustomerAgingComponent;
  let fixture: ComponentFixture<CustomerAgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
