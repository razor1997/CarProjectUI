import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserVehicleAddDto, GUID, guid } from 'src/app/models/user-vehicle-add-dto';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserCarsService} from 'src/app/shared/services/user-cars.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class addVehicleComponent {
  userId: string;
  addCarForm: FormGroup;
  constructor(private userCarsService: UserCarsService,
            private formBuilder: FormBuilder,
            private accountService: AccountService)
  {
    this.userId = "";
    this.addCarForm = this.formBuilder.group({
      brandId: [''],
      modelId: [''],
      mileage: ['']
    });
  }


  onSubmit()
  {
    if (this.addCarForm.valid) {
      
      const brandId = this.addCarForm.get('brandId')?.value; // Użyj operatora "?" do bezpiecznego dostępu
      const modelId = this.addCarForm.get('modelId')?.value;
      const mileage = this.addCarForm.get('mileage')?.value;
      this.accountService.getUserId().subscribe(userId => {
        if(userId !== null)
          {
            this.userId = userId
          }
        });
      const vehicle: UserVehicleAddDto =
      {
        id: guid("3FA85F64-5717-4562-B3FC-2C963F66AFA6"),
        userId: this.userId,
        vehicleId: guid("3FA85F64-5717-4562-B3FC-2C963F66AFA6"),
        buyPrice: 1,
        bodyType: 1,
        yearProduction: 1,
        mileage: 1,
        engineCapacity: 1,
        typeVehicle: 1
      };
       this.userCarsService.add(vehicle).subscribe(dto => vehicle);    
    }
  }
}
