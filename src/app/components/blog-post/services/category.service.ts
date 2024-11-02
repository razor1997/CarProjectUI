import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  model: AddCategoryRequest;

  constructor(private http: HttpClient) { 
    this.model = {
      name: '',
      urlHandle: ''
    }
  }

  addCategory(model: AddCategoryRequest) : Observable<void>
  {
    return this.http.post<void>(environment.urlAddress + '/api/categories', model);
  }
  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(environment.urlAddress + '/api/categories');
  }
}
