import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AIDevsTasksService } from '../../shared/services/aidevs-tasks.service';
import { TASK_OPTIONS_AIDEVS2, TASK_OPTIONS_AIDEVS3, TaskOption } from '../models/tasks';

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
  taskOptions: TaskOption[] = [];
  selectedVersion: 'aidevs2' | 'aidevs3' = 'aidevs2';

  constructor(
    private formBuilder: FormBuilder,
    private aidevsTasksService: AIDevsTasksService
  ) {
    this.form = this.formBuilder.group({
      apiKey: ['', Validators.required],
      task: ['', Validators.required],
      version: ['aidevs2', Validators.required]
    });

    this.updateTaskOptions();
  }

  get f() { return this.form.controls; }

  onVersionChange() {
    this.selectedVersion = this.f['version'].value;
    this.updateTaskOptions();
    this.form.patchValue({ task: '' }); // Reset task selection
  }

  private updateTaskOptions() {
    this.taskOptions = this.selectedVersion === 'aidevs2' 
      ? TASK_OPTIONS_AIDEVS2 
      : TASK_OPTIONS_AIDEVS3;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    
    const formData = {
      apiKey: this.f['apiKey'].value,
      task: this.f['task'].value,
      version: this.f['version'].value
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
