import { Injectable } from '@angular/core';
import { RegistrationResponseDto } from 'src/app/models/registration-response-dto';
import { UserForLogiDto } from 'src/app/models/user-for-login-dto';
import { UserForRegistrationDto } from 'src/app/models/user-for-registration-dto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AuthResponseDto } from 'src/app/models/auth-response-dto';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  userSubject: BehaviorSubject<UserForLogiDto | null>;
  user:  Observable<UserForLogiDto | null>;
  userId: string;
  constructor(private http: HttpClient, 
    private envUrl: EnvironmentUrlService,  
    private router: Router,
    private authService: AuthenticationService
  ) 
  { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!)); 
    this.user = this.userSubject.asObservable();
    this.userId = "";   
  }
  registerUser = (route: string, user: UserForRegistrationDto) => {
    return this.http.post(`${this.envUrl.urlAddress}accounts/register`, user);
  }
  getUserId(): Observable<string | null> {
    return this.user.pipe(
      // Extract the userId if the user object is not null
      map(userData => userData ? userData.userId : null),
      catchError(error => {
        console.error('Error occurred:', error);
        return of(''); // Return empty string if there is an error or userId is null
      })
    );
  };
  setUserId(userId: string){
    this.userId = userId;
    this.user.subscribe(id => userId);
    console.log(userId);
  }
  login = (user:UserForLogiDto) =>
  {
    return this.http.post<AuthResponseDto>(`${this.envUrl.urlAddress}/api/accounts/login`,  user ) 
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    // this.router.navigate(['/account/login']);
}
}
