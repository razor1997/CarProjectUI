import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AIDevsTasksService } from '../../shared/services/aidevs-tasks.service';

@Component({
  selector: 'app-aidevs-ui',
  templateUrl: './aidevs-ui.component.html',
  styleUrls: ['./aidevs-ui.component.css']
})
export class AidevsUiComponent {
  form: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string = '';
  showError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private aidevsTasksService: AIDevsTasksService
  ) {
    this.form = this.formBuilder.group({
      apiKey: ['', Validators.required],
      task: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    
    const formData = {
      apiKey: this.f['apiKey'].value,
      task: this.f['task'].value
    };

    this.aidevsTasksService.sendTask(formData)
      .subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.loading = false;
        },
        error: (error) => {
          console.error('Error:', error);
          this.errorMessage = error.error.error.message;
          this.showError = true;
          this.loading = false;
        }
      });
  }
}
