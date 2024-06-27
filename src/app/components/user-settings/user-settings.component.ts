import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserForLogiDto } from 'src/app/models/user-for-login-dto';
import { GUID } from 'src/app/models/user-vehicle-add-dto';
import { UserEditSettingsDto } from 'src/app/models/user/user-settings-edit-dto';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserEditService } from 'src/app/shared/services/user-edit.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  profileForm: FormGroup ;
  user: UserForLogiDto | undefined;
  imagePreview: string;

  constructor(private accoutService: AccountService, private formBuilder: FormBuilder, private userEditService: UserEditService) { 
    // this.accoutService.user.pipe(take(1)).subscribe(user => this.user = user);
    this.imagePreview = "";
    this.profileForm = this.formBuilder.group({
      profileImage: [''], // Placeholder for profile image
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(6)],
      confirmPassword: ['', Validators.required]    
    },
  {
    validators: this.customPasswordMatching.bind(this)
  });
  }

  ngOnInit(): void {

  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profileForm.patchValue({
        profileImage: file
      });
      this.previewImage(file); // Preview the selected image
    }
  }
  onSubmit() {
    if (this.profileForm.valid) {
      // Process form data (e.g., send to backend)
      const dto: UserEditSettingsDto =
      {
        email: "test@test",
        password: "test",
        username: "test"

      };
      
      this.userEditService.update(dto, "F7EDF6EF-899A-454B-9696-866E690E5B0A");
      console.log(this.profileForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
  public customPasswordMatching(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { passwordMismatchError: true };
  }
}
