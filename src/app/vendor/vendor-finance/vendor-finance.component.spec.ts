import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFinanceComponent } from './vendor-finance.component';

describe('VendorFinanceComponent', () => {
  let component: VendorFinanceComponent;
  let fixture: ComponentFixture<VendorFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
