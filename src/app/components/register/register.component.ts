import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
toppings: any;
stateControl: FormControl;
constructor()
{
  this.stateControl = new FormControl();
}
ngOnInit(): void {
}
}
