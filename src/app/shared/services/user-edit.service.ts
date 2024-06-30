import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEditSettingsDto } from 'src/app/models/user/user-settings-edit-dto';
import { EnvironmentUrlService } from './environment-url.service';
import { GUID } from 'src/app/models/user-vehicle-add-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

  constructor(private http: HttpClient,
    private envUrl: EnvironmentUrlService) 
    {

    }
  update(dto: UserEditSettingsDto, id: string ) : Observable<UserEditSettingsDto>
  {
    const url = `${this.envUrl.urlAddress}/api/user/` + id;
    return this.http.put<UserEditSettingsDto>(url, dto)
    .pipe(
        //  catchError(this.handleError('deleteHero')
        
    );
  }
}
