import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './authentication/register-user/register-user.component';
import { LoginUserComponent } from './authentication/login-user/login-user.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserCarsComponent } from './components/user-cars/user-cars.component';
import { addVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FindVehicleComponent } from './components/find-vehicle/find-vehicle.component';
import { FindVehicleListComponent } from './components/find-vehicle-list/find-vehicle-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginUserComponent }, 
  {path: 'userSettings', component: UserSettingsComponent},
  {path: 'userCars', component: UserCarsComponent},
  {path: 'addVehicle', component: addVehicleComponent},
  {path: 'findVehicle', component: FindVehicleComponent},
  {path: 'findVehicleList', component: FindVehicleListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
