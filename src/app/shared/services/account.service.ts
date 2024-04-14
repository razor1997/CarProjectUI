import { Injectable } from '@angular/core';
import { RegistrationResponseDto } from 'src/app/models/registration-response-dto';
import { UserForLogiDto } from 'src/app/models/user-for-login-dto';
import { UserForRegistrationDto } from 'src/app/models/user-for-registration-dto';
import { HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  userSubject: BehaviorSubject<UserForLogiDto | null>;
  user:  Observable<UserForLogiDto | null>;

  constructor(private http: HttpClient, 
    private envUrl: EnvironmentUrlService,  
    private router: Router,
  ) 
  { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!)); 
    this.user = this.userSubject.asObservable();
  }
  registerUser = (route: string, user: UserForRegistrationDto) => {
    return this.http.post(`${this.envUrl.urlAddress}accounts/register`, user);
  }
  login(user:UserForLogiDto)
  {
    return this.http.post<UserForLogiDto>(`${this.envUrl.urlAddress}/api/accounts/login`,  user )
    .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
    }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    // this.router.navigate(['/account/login']);
}
}
