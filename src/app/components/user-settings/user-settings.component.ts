import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserForLogiDto } from 'src/app/models/user-for-login-dto';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  profileForm: FormGroup ;
  user: UserForLogiDto | undefined;
  imagePreview: string;

  constructor(private accoutService: AccountService, private formBuilder: FormBuilder) { 
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
