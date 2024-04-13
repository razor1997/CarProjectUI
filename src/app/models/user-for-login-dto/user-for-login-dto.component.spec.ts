import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForLoginDtoComponent } from './user-for-login-dto.component';

describe('UserForLoginDtoComponent', () => {
  let component: UserForLoginDtoComponent;
  let fixture: ComponentFixture<UserForLoginDtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserForLoginDtoComponent]
    });
    fixture = TestBed.createComponent(UserForLoginDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
