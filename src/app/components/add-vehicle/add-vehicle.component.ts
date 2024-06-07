import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserVehicleAddDto, GUID, guid } from 'src/app/models/user-vehicle-add-dto';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserCarsService} from 'src/app/shared/services/user-cars.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class addVehicleComponent {
  @ViewChild('brandSelect')
  brandSelect!: ElementRef;
  @ViewChild('modelSelect')
  modelSelect!: ElementRef;
  @ViewChild('mileage') 
  mileage!: ElementRef;
  @ViewChild('yearSelect') 
  yearSelect!: ElementRef;
  years: number[] = Array.from({ length: 40 }, (_, i) => new Date().getFullYear() - i);
  @ViewChild('buyPrice') 
  buyPrice!: ElementRef;

  userId: string;
  addCarForm: FormGroup;
  submitted: boolean;

  constructor(private userCarsService: UserCarsService,
            private formBuilder: FormBuilder,
            private accountService: AccountService,
            private router: Router,)
  {
    this.userId = "";
    this.submitted = false;
    this.addCarForm = this.formBuilder.group({
      mileage: ['1000', Validators.required],
      buyPrice:['1000', Validators.required],
    });
  }
  get f() { return this.addCarForm.controls; }

  getSelectedBrandIdentifier(): number{
    const selectedOption = this.brandSelect.nativeElement.options[this.brandSelect.nativeElement.selectedIndex];
    return selectedOption.getAttribute('id');
  }
  getSelectedModelIdentifier(): number{
    const selectedOption = this.modelSelect.nativeElement.options[this.modelSelect.nativeElement.selectedIndex];
    return selectedOption.getAttribute('id');
  }
  getYearProduction(): number{
    const selectedOption = this.yearSelect.nativeElement.options[this.yearSelect.nativeElement.selectedIndex];
    return this.yearSelect.nativeElement.value;
  }

  onSubmit()
  {
    this.submitted = true;
    if (this.addCarForm.valid) {
      const vehicle: UserVehicleAddDto =
      {
        userId: this.accountService.getUserId(),
        brandId: this.getSelectedBrandIdentifier(),
        modelId: this.getSelectedModelIdentifier(),
        buyPrice: this.buyPrice.nativeElement.value,
        bodyType: 1,
        yearProduction: this.getYearProduction(),
        mileage: this.mileage.nativeElement.value,
        engineCapacity: 1,
        typeVehicle: 1
      };
      if(this.userCarsService.add(vehicle).subscribe(dto => vehicle))
      {
        this.router.navigateByUrl('userCars')
        }
        this.submitted = false;
    }
  }
}
