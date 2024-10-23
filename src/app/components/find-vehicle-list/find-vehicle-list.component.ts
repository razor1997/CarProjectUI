import { Component } from '@angular/core';

@Component({
  selector: 'app-find-vehicle-list',
  templateUrl: './find-vehicle-list.component.html',
  styleUrls: ['./find-vehicle-list.component.css']
})
export class FindVehicleListComponent {
  
  openImage(url: string): void {
    window.open(url, '_blank');
  }
}
