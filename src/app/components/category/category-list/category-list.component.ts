import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../blog-post/services/category.service';
import { Category } from '../../blog-post/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  categories?: Category[];
  constructor(private categoryService: CategoryService){

  }
  ngOnInit(): void {
    this.categoryService.getAllCategories()
    .subscribe({
      next: (response) =>{
        this.categories = response;
      }
  });
  }

}
