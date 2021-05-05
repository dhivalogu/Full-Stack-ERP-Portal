import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGoodsReceiptComponent } from './vendor-goods-receipt.component';

describe('VendorGoodsReceiptComponent', () => {
  let component: VendorGoodsReceiptComponent;
  let fixture: ComponentFixture<VendorGoodsReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorGoodsReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorGoodsReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
