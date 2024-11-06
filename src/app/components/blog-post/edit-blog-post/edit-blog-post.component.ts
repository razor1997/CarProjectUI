import { Component, OnDestroy, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blog-post.model';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Component({
  selector: 'app-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.css']
})
export class EditBlogPostComponent implements OnInit, OnDestroy{
  id: string | null = null;
  routeSubscription?: Subscription;
  model?: BlogPost;
  categories$?: Observable<Category[]>
  selectedCategories?: string[]
  updateBlogPostSubscription?: Subscription
  getBlogPostSubscription?: Subscription

  constructor(private router:Router,
    private route:ActivatedRoute,
    private blogPostService: BlogPostService,
    private categoryService: CategoryService
  ){

  }
  onFormSubmit():void{
    if(this.model && this.id)
    {
      var updateBlogPost: UpdateBlogPost = {
        title: this.model.title,
        shortDescription: this.model.shortDescription,
        content: this.model.content,
        featuredImageUrl: this.model.featuredImageUrl,
        urlHandle: this.model.urlHandle,
        author: this.model.author,
        publishedDate: this.model.publishedDate,
        isVisible: this.model.isVisible,
        categories: this.selectedCategories ?? [] 
      }
      console.log(updateBlogPost)
      this.updateBlogPostSubscription = this.blogPostService.updateBlogPost(this.id, updateBlogPost)
      .subscribe({
        next:(response) => {
          this.router.navigateByUrl('/admin/blogposts');
        }
      });
    }
  }
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateBlogPostSubscription?.unsubscribe();
    this.getBlogPostSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    this.routeSubscription = this.route.paramMap.subscribe({
      next:(params) => {
        this.id = params.get('id');
        if(this.id){
          this.updateBlogPostSubscription = this.blogPostService.getBlogPostById(this.id).subscribe({
            next: (response) =>{
              this.model = response;
              this.selectedCategories = response.categories.map(x => x.id)
            }
          })
        }
      }
    })
  }

}
