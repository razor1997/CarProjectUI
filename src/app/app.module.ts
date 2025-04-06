import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterUserComponent } from './authentication/register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserCarsComponent } from './components/user-cars/user-cars.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { addVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { FooterComponent } from './footer/footer.component';
import { SliderModule } from './gallery/sliders/slider/slider.module';
import { FindVehicleComponent } from './components/find-vehicle/find-vehicle.component';
import { FindVehicleListComponent } from './components/find-vehicle-list/find-vehicle-list.component';
import { HomeComponent } from './public/home/home.component';
import { BlogpostListComponent } from './components/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './components/blog-post/add-blogpost/add-blogpost.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { EditBlogPostComponent } from './components/blog-post/edit-blog-post/edit-blog-post.component';
import { AidevsUiComponent } from './AIDevs_3/aidevs-ui/aidevs-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserSettingsComponent,
    UserCarsComponent,
    addVehicleComponent,
    HomepageComponent,
    FooterComponent,
    FindVehicleComponent,
    FindVehicleListComponent,
    HomeComponent,
    BlogpostListComponent,
    AddBlogpostComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditBlogPostComponent,
    AidevsUiComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule ,
    ReactiveFormsModule,
    MatTooltipModule,
    CommonModule,
    SliderModule,
    RouterModule.forChild([
      { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
    ])
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
