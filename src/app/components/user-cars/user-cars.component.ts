import { Component, OnInit } from '@angular/core';
import { UserCarDto } from 'src/app/models/user-car-dto';
import { UserCarsService } from 'src/app/shared/services/user-cars.service';

@Component({
  selector: 'app-user-cars',
  templateUrl: './user-cars.component.html',
  styleUrls: ['./user-cars.component.css']
})
export class UserCarsComponent implements OnInit {
  userCars: UserCarDto[] = [];
  constructor(private userCarService: UserCarsService)
  {
    
  }
  ngOnInit(): void {
    this.userCarService.getAllUsersCars().subscribe((userCars) => {
      this.userCars = userCars;
    })
  }

}
