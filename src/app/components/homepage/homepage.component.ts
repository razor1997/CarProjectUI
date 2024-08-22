import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent { 
  images = [
  {
   id: 0,
   imageSrc: 'assets/carsImages/audi_r8.jpg',
   imageAlt: 'e60',
 },
 {
   id: 1,
   imageSrc: 'assets/carsImages/m8.jpg',
   imageAlt: 'm8'
 },
 {
   id: 2,
   imageSrc: 'assets/carsImages/m4.jpg',
   imageAlt: 'm4'
 }];
  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }

}
