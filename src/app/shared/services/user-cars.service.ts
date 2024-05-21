import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { UserCarDto } from 'src/app/models/user-car-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCarsService {

  constructor(private http: HttpClient,
    private envUrl: EnvironmentUrlService
  ) { }
  getAllUsersCars(): Observable<UserCarDto[]>
  {
    return this.http.get<UserCarDto[]>(`${this.envUrl.urlAddress}/api/uservehicle/user-cars`);
  }
  add()
  {
    this.http.post<User
  }
}
