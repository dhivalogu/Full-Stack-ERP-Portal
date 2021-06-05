import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPoCreateComponent } from './vendor-po-create.component';

describe('VendorPoCreateComponent', () => {
  let component: VendorPoCreateComponent;
  let fixture: ComponentFixture<VendorPoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
