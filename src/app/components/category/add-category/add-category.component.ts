import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../../blog-post/models/add-category-request.model';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../blog-post/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubsription?: Subscription;
  constructor(private http: HttpClient, 
              private categoryService: CategoryService
  ){
    this.model ={
      name: '',
      urlHandle: ''
    };
  }
  ngOnDestroy(): void {
    this.addCategorySubsription?.unsubscribe();
  }
  onFormSubmit()
  {
    this.addCategorySubsription = this.categoryService.addCategory(this.model)
      .subscribe({
        next: (response) =>{
          console.log('success');
        }
      });
  }
}
