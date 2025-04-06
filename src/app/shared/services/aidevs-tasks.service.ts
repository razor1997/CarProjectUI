import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { apiKey } from '../../Secrets/secretKey';

@Injectable({
  providedIn: 'root'
})
export class AIDevsTasksService {
  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  sendTask(formData: any): Observable<any> {
    const params = new HttpParams()
      .set('task', formData.task)
      .set('apiKey', apiKey);
    
    return this.http.get(`${this.envUrl.urlAddress}/api/AIDevsTasks/`+formData.task+`/`+apiKey);
  }
}
