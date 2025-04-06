import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidevsUiComponent } from './aidevs-ui.component';

describe('AidevsUiComponent', () => {
  let component: AidevsUiComponent;
  let fixture: ComponentFixture<AidevsUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AidevsUiComponent]
    });
    fixture = TestBed.createComponent(AidevsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
