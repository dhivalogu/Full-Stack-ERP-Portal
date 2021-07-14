import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorInvlistComponent } from './vendor-invlist.component';

describe('VendorInvlistComponent', () => {
  let component: VendorInvlistComponent;
  let fixture: ComponentFixture<VendorInvlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorInvlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorInvlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
