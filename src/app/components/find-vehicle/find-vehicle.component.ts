import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-vehicle',
  templateUrl: './find-vehicle.component.html',
  styleUrls: ['./find-vehicle.component.css']
})
export class FindVehicleComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router
  ) {
    this.form = this.fb.group({
      checkboxes: this.fb.array(
        Array(6).fill(false) // Initializes 6 checkboxes with false (unchecked)
      )
    });
  }

  get checkboxes(): FormArray {
    return this.form.get('checkboxes') as FormArray;
  }

  onSubmit(): void {
    console.log('Form submitted:', this.form.value);
    this.router.navigateByUrl('findVehicleList');
  }
}
