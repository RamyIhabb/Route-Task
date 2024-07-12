import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransuctionComponent } from './customer-transuction.component';

describe('CustomerTransuctionComponent', () => {
  let component: CustomerTransuctionComponent;
  let fixture: ComponentFixture<CustomerTransuctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerTransuctionComponent]
    });
    fixture = TestBed.createComponent(CustomerTransuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
