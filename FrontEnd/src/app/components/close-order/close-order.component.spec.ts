import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseOrderComponent } from './close-order.component';

describe('CloseOrderComponent', () => {
  let component: CloseOrderComponent;
  let fixture: ComponentFixture<CloseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
