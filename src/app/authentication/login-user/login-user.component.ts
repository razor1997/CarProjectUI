import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from './../../shared/services/authentication.service';
import {FormsModule, FormControl, FormGroup, Validators,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { WarningService } from 'src/app/shared/services/warning.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserForLogiDto } from 'src/app/models/user-for-login-dto';
import { first } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit{
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private warningService: WarningService,
    private accountService: AccountService,  
    private route: ActivatedRoute,
    private router: Router,
  ){
    
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        rememberMe: [false]
    });
}
get f() { return this.form.controls; }

public onSubmit(){
  this.warningService.clear();

  // if(this.form.invalid){
  //   return;
  // }
  console.log("huj");
  this.loading = true;
  let user: UserForLogiDto = {
    userName: this.f.username.value ,
    passwordHash: this.f.password.value,
    rememberMe: this.f.rememberMe.value
  };

  this.accountService.login(user)
    .pipe(first()) 
    .subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams['userSettings'] || '/';
        this.router.navigateByUrl(returnUrl)
      },
      error: error => {
          // this.warningService.error(error);
          this.loading = false;
      }
    })
    const returnUrl = this.route.snapshot.queryParams['userSettings'];// || '/';
    this.router.navigateByUrl(returnUrl)
}
}
