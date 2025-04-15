import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedOrderComponent } from './closed-order.component';

describe('ClosedOrderComponent', () => {
  let component: ClosedOrderComponent;
  let fixture: ComponentFixture<ClosedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosedOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
