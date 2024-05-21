import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isUserAuthenticated: boolean;

  constructor(private authService: AuthenticationService,
    private router: Router
  ) 
  { 
    this.isUserAuthenticated = false;
  }
  onSelectionChange(event: any) {
    this.router.navigate(['/' + event.value]);
  }
  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }
}
