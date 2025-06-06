import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../blog-post/services/category.service';
import { Category } from '../../blog-post/models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  categories$?: Observable<Category[]>;
  constructor(private categoryService: CategoryService){

  }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories()
  }

}
