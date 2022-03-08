import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRentComponent } from './vehicle-rent.component';

describe('VehicleRentComponent', () => {
  let component: VehicleRentComponent;
  let fixture: ComponentFixture<VehicleRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
