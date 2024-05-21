import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addVehicleComponent } from './add-vehicle.component';

describe('addVehicleComponent', () => {
  let component: addVehicleComponent;
  let fixture: ComponentFixture<addVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [addVehicleComponent]
    });
    fixture = TestBed.createComponent(addVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
