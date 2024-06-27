import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEditSettingsDto } from 'src/app/models/user/user-settings-edit-dto';
import { EnvironmentUrlService } from './environment-url.service';
import { GUID } from 'src/app/models/user-vehicle-add-dto';

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

  constructor(private http: HttpClient,
    private envUrl: EnvironmentUrlService) 
    {

    }
  update(dto: UserEditSettingsDto, id: string )
  {
    const url = `${this.envUrl.urlAddress}/api/user`;
    return this.http.post<UserEditSettingsDto>(url, dto)
    .pipe(
        //  catchError(this.handleError('deleteHero'))
    );
  }
}
