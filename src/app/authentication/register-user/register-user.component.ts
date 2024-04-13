import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserForRegistrationDto } from  './../../models/user-for-registration-dto'; 
import { AuthenticationService } from './../../shared/services/authentication.service';
import {FormsModule, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public registerForm: FormGroup;



  constructor(private authService: AuthenticationService) 
  { 
    this.registerForm= new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl('')   });
  }

  ngOnInit(): void {
  }

  public validateControl = (controlName: string ) => {
    return this.registerForm.get(controlName)!.invalid && this.registerForm.get(controlName)!.touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName)!.hasError(errorName)
  }
  public passwordsEqual = () => {
    return this.registerForm.get('confirm')?.value === this.registerForm.get('password')?.value
  }
  public registerUser = (registerFormValue: any) => {
    const formValues = { ...registerFormValue };
    const user: UserForRegistrationDto = {
      userName: formValues.firstName,
      email: formValues.email,
      password: formValues.password,
      phoneNumber: "",
      carPreferences: 1
    };

    this.authService.registerUser("api/accounts/Registration", user)
    .subscribe({
      next: (_) => console.log("Successful registration"),
      error: (err: HttpErrorResponse) => console.log(err.error.errors)
    })
  }
}