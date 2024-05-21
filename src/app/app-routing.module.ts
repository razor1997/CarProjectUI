import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './authentication/register-user/register-user.component';
import { LoginUserComponent } from './authentication/login-user/login-user.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserCarsComponent } from './components/user-cars/user-cars.component';
import { addVehicleComponent } from './components/add-vehicle/add-vehicle.component';

const routes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginUserComponent }, 
  {path: 'userSettings', component: UserSettingsComponent},
  {path: 'userCars', component: UserCarsComponent},
  {path: 'addVehicle', component: addVehicleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
